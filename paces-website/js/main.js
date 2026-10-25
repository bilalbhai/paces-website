/* P.A.C.E.S. interactions. Classic scripts work directly from file://. */
(function () {
  "use strict";

  function start() {
    document.documentElement.classList.add("js");
    var config = window.PACES_CONFIG || {};
    var root = document.body.dataset.root || "./";
    var parameters = new URLSearchParams(window.location.search);
    var developmentPreview = config.publicationMode === "development" &&
      (parameters.get("preview") === "team" || config.enableDevelopmentProfiles === true);
    var workers = (window.PACES_WORKERS || []).filter(function (worker) {
      return worker.publicationStatus === "approved" ||
        (developmentPreview && worker.publicationStatus === "development");
    });
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Canonicals are intentionally absent until the owner confirms the final URL.
    var robots = document.querySelector("meta[name='robots']");
    if (robots) robots.content = config.publicationMode === "production" ? "index,follow" : "noindex,follow";
    if (config.websiteUrl) {
      try {
        var siteUrl = new URL(config.websiteUrl);
        if (siteUrl.protocol === "https:" && !siteUrl.username && !siteUrl.password) {
          if (!siteUrl.pathname.endsWith("/")) siteUrl.pathname += "/";
          var pagePath = document.body.dataset.page || "index.html";
          var pageUrl = new URL(pagePath === "index.html" ? "./" : pagePath, siteUrl).href;
          var canonical = document.querySelector("link[rel='canonical']");
          if (!canonical) {
            canonical = document.createElement("link");
            canonical.rel = "canonical";
            document.head.appendChild(canonical);
          }
          canonical.href = pageUrl;
          var ogUrl = document.querySelector("meta[property='og:url']");
          if (!ogUrl) {
            ogUrl = document.createElement("meta");
            ogUrl.setAttribute("property", "og:url");
            document.head.appendChild(ogUrl);
          }
          ogUrl.content = pageUrl;
          var ogImage = document.querySelector("meta[property='og:image']");
          if (ogImage) ogImage.content = new URL("images/general/home.jpg", siteUrl).href;
          var businessData = document.createElement("script");
          businessData.type = "application/ld+json";
          businessData.id = "paces-business-data";
          var organisation = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: config.businessName,
            url: siteUrl.href,
            telephone: config.phoneE164,
            areaServed: config.serviceAreas || []
          };
          if (config.email) organisation.email = config.email;
          businessData.textContent = JSON.stringify(organisation);
          document.head.appendChild(businessData);
        }
      } catch (error) {
        // A malformed draft URL must never break navigation or contact controls.
      }
    }

    function make(tag, className, text) {
      var element = document.createElement(tag);
      if (className) element.className = className;
      if (text !== undefined) element.textContent = text;
      return element;
    }

    function appendList(parent, title, values, headingLevel) {
      if (!values || !values.length) return;
      parent.appendChild(make(headingLevel || "h3", "worker-detail-title", title));
      var list = make("ul", "worker-list");
      values.forEach(function (value) { list.appendChild(make("li", "", value)); });
      parent.appendChild(list);
    }

    function workerLink(page, worker, parameterName) {
      var query = new URLSearchParams();
      query.set(parameterName, worker.id);
      if (worker.publicationStatus === "development") query.set("preview", "team");
      return root + page + "?" + query.toString();
    }

    function workerCard(worker, detailed) {
      var article = make("article", detailed ? "worker-card worker-card-full" : "worker-card");
      var media = make("div", "worker-photo");
      if (worker.id === "bilal") media.classList.add("worker-photo--bilal");
      var photograph = make("img");
      photograph.src = root + worker.photo;
      photograph.alt = worker.photoAlt || (worker.photoIsPlaceholder || worker.publicationStatus === "development"
        ? "Photo placeholder for " + worker.name + "; staff photograph to be added"
        : "Photograph of " + worker.name);
      photograph.width = worker.photoWidth || 600;
      photograph.height = worker.photoHeight || 700;
      photograph.loading = "lazy";
      media.appendChild(photograph);
      if (worker.photoIsPlaceholder) media.appendChild(make("p", "worker-photo-note", worker.photoPlaceholderLabel || "Photo to be added"));
      article.appendChild(media);
      var body = make("div", "worker-content");
      if (worker.publicationStatus === "development") {
        body.appendChild(make("p", "development-label", "Development preview · not a staff member"));
      }
      body.appendChild(make("p", "eyebrow", worker.role));
      body.appendChild(make(detailed ? "h1" : "h3", "worker-name", worker.name));
      body.appendChild(make("p", "", worker.biography));
      appendList(body, "Qualifications", worker.qualifications, detailed ? "h2" : "h4");
      appendList(body, "Relevant experience", worker.experience, detailed ? "h2" : "h4");
      if (worker.supportCategories && worker.supportCategories.length) {
        var categories = make("ul", "worker-tags");
        worker.supportCategories.forEach(function (category) {
          categories.appendChild(make("li", "tag", category));
        });
        categories.setAttribute("aria-label", "Areas of support");
        body.appendChild(categories);
      }
      appendList(body, "Languages", worker.languages, detailed ? "h2" : "h4");
      if (detailed) appendList(body, "Interests", worker.interests, "h2");
      var actions = make("div", "button-row worker-actions");
      var enquiry = make("a", "button button-primary", "Enquire About Support");
      enquiry.href = workerLink("contact.html", worker, "worker");
      actions.appendChild(enquiry);
      if (!detailed) {
        var profile = make("a", "text-link", "View profile →");
        profile.href = workerLink("worker.html", worker, "id");
        actions.appendChild(profile);
      }
      body.appendChild(actions);
      body.appendChild(make("p", "small-note", "An enquiry starts a conversation; it does not confirm a booking."));
      article.appendChild(body);
      return article;
    }

    // Every telephone and WhatsApp control reads the same public configuration.
    document.querySelectorAll("[data-phone]").forEach(function (link) {
      if (config.phoneE164) link.href = "tel:" + config.phoneE164;
      if (link.hasAttribute("data-phone-text")) link.textContent = config.phoneDisplay || "Call our team";
    });
    document.querySelectorAll("[data-phone-text]").forEach(function (label) {
      label.textContent = config.phoneDisplay || "Call our team";
    });
    var whatsappReady = config.whatsappConfirmed === true && /^\d{8,15}$/.test(config.whatsappNumber || "");
    document.querySelectorAll("[data-whatsapp]").forEach(function (link) {
      if (whatsappReady) {
        link.href = "https://wa.me/" + config.whatsappNumber + "?text=" + encodeURIComponent(
          config.whatsappMessage || "Hi P.A.C.E.S., I would like to know more about your disability support services."
        );
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", "WhatsApp P.A.C.E.S. (opens in a new tab)");
      } else {
        link.href = root + "contact.html#contact-options";
        link.removeAttribute("target");
        link.setAttribute("aria-label", "WhatsApp setup pending. View available contact options.");
        link.setAttribute("title", "WhatsApp is awaiting business confirmation. Call or view contact options.");
        link.classList.add("contact-pending");
      }
    });
    document.querySelectorAll("[data-whatsapp-status]").forEach(function (notice) {
      notice.hidden = whatsappReady;
    });
    document.querySelectorAll("[data-email]").forEach(function (link) {
      if (config.email) {
        link.href = "mailto:" + config.email;
        if (link.hasAttribute("data-email-text")) link.textContent = config.email;
      } else {
        link.href = root + "contact.html";
        if (link.hasAttribute("data-email-text")) link.textContent = "Contact our team";
      }
    });

    var menuToggle = document.getElementById("menu-toggle");
    var navigation = document.getElementById("primary-nav");
    if (menuToggle && navigation) {
      function closeMenu(returnFocus) {
        menuToggle.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        if (returnFocus) menuToggle.focus();
      }
      menuToggle.addEventListener("click", function () {
        var opening = menuToggle.getAttribute("aria-expanded") !== "true";
        menuToggle.setAttribute("aria-expanded", String(opening));
        navigation.classList.toggle("is-open", opening);
        document.body.classList.toggle("menu-open", opening);
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") closeMenu(true);
      });
      navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { closeMenu(false); });
      });
      document.addEventListener("click", function (event) {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(false);
      });
      window.matchMedia("(min-width: 951px)").addEventListener("change", function (event) {
        if (event.matches) closeMenu(false);
      });
    }

    // Native horizontal scrolling provides touch swipe without pointer traps.
    document.querySelectorAll("[data-worker-carousel]").forEach(function (container) {
      if (!workers.length) return;
      container.replaceChildren();
      var track = make("div", "team-track");
      track.tabIndex = 0;
      track.setAttribute("aria-label", "Support worker profiles. Use left and right arrow keys to scroll.");
      workers.forEach(function (worker) { track.appendChild(workerCard(worker, false)); });
      container.appendChild(track);
      var controls = container.parentElement.querySelector(".carousel-controls");
      if (!controls) {
        controls = make("div", "carousel-controls");
        var previous = make("button", "carousel-button", "←");
        previous.type = "button";
        previous.setAttribute("data-carousel-prev", "");
        previous.setAttribute("aria-label", "Previous support worker");
        var next = make("button", "carousel-button", "→");
        next.type = "button";
        next.setAttribute("data-carousel-next", "");
        next.setAttribute("aria-label", "Next support worker");
        var count = make("span", "carousel-status");
        count.setAttribute("data-carousel-status", "");
        count.setAttribute("aria-live", "polite");
        controls.append(previous, count, next);
        container.appendChild(controls);
      }
      controls.hidden = false;
      var prevButton = controls.querySelector("[data-carousel-prev]");
      var nextButton = controls.querySelector("[data-carousel-next]");
      var status = controls.querySelector("[data-carousel-status]");
      function currentIndex() {
        var first = track.firstElementChild;
        var distance = first ? first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0) : 1;
        return Math.max(0, Math.min(workers.length - 1, Math.round(track.scrollLeft / distance)));
      }
      function updateControls() {
        if (prevButton) prevButton.disabled = track.scrollLeft < 3;
        if (nextButton) nextButton.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 3;
        if (status) status.textContent = (currentIndex() + 1) + " / " + workers.length;
      }
      function moveTo(index) {
        index = Math.max(0, Math.min(workers.length - 1, index));
        var card = track.children[index];
        track.scrollTo({ left: card.offsetLeft - track.firstElementChild.offsetLeft, behavior: reducedMotion.matches ? "auto" : "smooth" });
      }
      if (prevButton) prevButton.addEventListener("click", function () { moveTo(currentIndex() - 1); });
      if (nextButton) nextButton.addEventListener("click", function () { moveTo(currentIndex() + 1); });
      track.addEventListener("keydown", function (event) {
        if (event.target !== track) return;
        if (event.key === "ArrowRight") { event.preventDefault(); moveTo(currentIndex() + 1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); moveTo(currentIndex() - 1); }
        if (event.key === "Home") { event.preventDefault(); moveTo(0); }
        if (event.key === "End") { event.preventDefault(); moveTo(workers.length - 1); }
      });
      track.addEventListener("scroll", updateControls, { passive: true });
      window.addEventListener("resize", updateControls);
      requestAnimationFrame(updateControls);
    });

    document.querySelectorAll("[data-worker-directory]").forEach(function (directory) {
      if (!workers.length) return;
      var filter = document.querySelector("[data-worker-filter]");
      var filterByRole = filter && filter.getAttribute("data-worker-filter") === "role";
      function renderDirectory(category) {
        directory.replaceChildren();
        var visible = workers.filter(function (worker) {
          return !category || (filterByRole ? worker.role === category : (worker.supportCategories || []).indexOf(category) !== -1);
        });
        visible.forEach(function (worker) { directory.appendChild(workerCard(worker, false)); });
        if (!visible.length) directory.appendChild(make("p", "empty-state", "No published profiles match this filter. Please contact the team to discuss your support needs."));
        var resultCount = document.querySelector("[data-worker-count]");
        if (resultCount) resultCount.textContent = visible.length + " profile" + (visible.length === 1 ? "" : "s");
      }
      if (filter) {
        filter.replaceChildren(new Option(filterByRole ? "All roles" : "All areas of support", ""));
        var categories = [];
        workers.forEach(function (worker) {
          (filterByRole ? [worker.role] : (worker.supportCategories || [])).forEach(function (category) {
            if (categories.indexOf(category) === -1) categories.push(category);
          });
        });
        categories.sort().forEach(function (category) { filter.appendChild(new Option(category, category)); });
        filter.disabled = false;
        filter.addEventListener("change", function () { renderDirectory(filter.value); });
      }
      renderDirectory("");
    });
    var profileContainer = document.getElementById("worker-profile");
    if (profileContainer) {
      var selectedWorker = workers.find(function (worker) { return worker.id === parameters.get("id"); });
      if (selectedWorker) {
        profileContainer.replaceChildren(workerCard(selectedWorker, true));
        if (selectedWorker.publicationStatus === "approved") document.title = selectedWorker.name + " | P.A.C.E.S. Support Team";
      }
    }

    function configuredEndpoint(value) {
      if (!value || /YOUR_|REPLACE|example\.com|placeholder/i.test(value)) return false;
      try {
        var endpoint = new URL(value);
        return endpoint.protocol === "https:" && !endpoint.username && !endpoint.password;
      } catch (error) { return false; }
    }

    document.querySelectorAll(".enquiry-form").forEach(function (form, formIndex) {
      var formEndpoint = form.dataset.kind === "feedback" && config.feedbackFormEndpoint
        ? config.feedbackFormEndpoint : config.formEndpoint;
      var endpointReady = configuredEndpoint(formEndpoint);
      var submit = form.querySelector("[data-submit], button[type='submit']");
      var status = form.querySelector("[data-form-status]") || document.getElementById("form-status");
      if (!status) {
        status = make("p", "form-status");
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        form.appendChild(status);
      }
      form.noValidate = true;
      form.method = "post";
      if (endpointReady) form.action = formEndpoint;
      else form.removeAttribute("action");
      if (submit) {
        submit.disabled = false;
        submit.textContent = endpointReady ? "Send enquiry" : "Check enquiry details";
      }
      if (!endpointReady) {
        status.textContent = "Online submissions are not active yet. You can check your details here, but they will not be sent. Please call " + (config.phoneDisplay || "our team") + " to enquire.";
        status.classList.add("is-pending");
      } else {
        status.textContent = "Please complete the required fields. Avoid including medical information or other sensitive details.";
        status.classList.remove("is-pending");
      }
      form.querySelectorAll("[data-form-setup]").forEach(function (notice) { notice.hidden = endpointReady; });
      var formService = form.elements.namedItem("service");
      var serviceQuery = parameters.get("service");
      if (formService && serviceQuery) {
        Array.from(formService.options || []).some(function (option) {
          if (option.value === serviceQuery || option.textContent === serviceQuery) {
            formService.value = option.value;
            return true;
          }
          return false;
        });
      }
      var workerField = form.elements.namedItem("worker");
      if (workerField && workerField.tagName === "SELECT") {
        workers.forEach(function (worker) {
          var option = new Option(worker.name + (worker.publicationStatus === "development" ? " (preview only)" : ""), worker.id);
          workerField.appendChild(option);
        });
        if (workers.some(function (worker) { return worker.id === parameters.get("worker"); })) workerField.value = parameters.get("worker");
      }
      var fields = Array.from(form.elements).filter(function (field) {
        return field.willValidate && field.type !== "submit" && field.type !== "button";
      });

      function clearError(field) {
        var errorId = (field.id || "form-" + formIndex + "-" + field.name) + "-error";
        var error = document.getElementById(errorId);
        if (error) error.remove();
        field.removeAttribute("aria-invalid");
        var describedBy = (field.getAttribute("aria-describedby") || "").split(/\s+/).filter(function (id) { return id && id !== errorId; });
        if (describedBy.length) field.setAttribute("aria-describedby", describedBy.join(" "));
        else field.removeAttribute("aria-describedby");
      }
      function fieldError(field) {
        clearError(field);
        if (field.validity.valid) return false;
        var label = form.querySelector("label[for='" + field.id + "']");
        var labelText = label ? label.textContent.replace(/\s*\*\s*$/, "").trim() : "this field";
        var message = field.validationMessage;
        if (field.validity.valueMissing) {
          message = field.type === "checkbox"
            ? (field.name === "authority" ? "Please confirm that you have permission to make this enquiry." : "Please acknowledge the privacy notice before continuing.")
            : "Please complete " + labelText.toLowerCase() + ".";
        }
        if (field.validity.typeMismatch && field.type === "email") message = "Enter an email address such as name@example.com.";
        if (field.validity.patternMismatch && field.type === "tel") message = "Enter a valid telephone number, including an area code where needed.";
        var errorId = (field.id || "form-" + formIndex + "-" + field.name) + "-error";
        var error = make("span", "field-error", message);
        error.id = errorId;
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-describedby", ((field.getAttribute("aria-describedby") || "") + " " + errorId).trim());
        (field.closest(".form-field") || field.parentElement).appendChild(error);
        return true;
      }
      fields.forEach(function (field) {
        field.addEventListener("input", function () {
          if (field.hasAttribute("aria-invalid")) fieldError(field);
        });
        field.addEventListener("change", function () {
          if (field.hasAttribute("aria-invalid")) fieldError(field);
        });
      });
      form.addEventListener("submit", async function (event) {
        event.preventDefault();
        var invalid = fields.filter(function (field) { return fieldError(field); });
        status.classList.remove("is-success", "is-error", "is-pending");
        if (invalid.length) {
          status.textContent = "Please check " + invalid.length + " highlighted field" + (invalid.length === 1 ? "" : "s") + ". Your enquiry has not been sent.";
          status.classList.add("is-error");
          invalid[0].focus();
          return;
        }
        if (!endpointReady) {
          status.textContent = "Your details pass the form checks. Nothing has been sent: online submissions are awaiting setup. Please call " + (config.phoneDisplay || "our team") + " to make your enquiry.";
          status.classList.add("is-pending");
          return;
        }
        var honeypot = form.elements.namedItem("_gotcha");
        if (honeypot && honeypot.value) {
          status.textContent = "We could not send this enquiry. Please call our team.";
          status.classList.add("is-error");
          return;
        }
        if (!window.fetch) {
          // A configured provider can handle standard HTML POST without Ajax.
          HTMLFormElement.prototype.submit.call(form);
          return;
        }
        if (submit) submit.disabled = true;
        form.setAttribute("aria-busy", "true");
        status.textContent = "Sending your enquiry…";
        var controller = window.AbortController ? new AbortController() : null;
        var timeout = controller ? window.setTimeout(function () { controller.abort(); }, 25000) : null;
        try {
          var payload = new FormData(form);
          payload.set("enquiryType", form.dataset.kind || "contact");
          var response = await fetch(formEndpoint, {
            method: "POST",
            body: payload,
            headers: { Accept: "application/json" },
            signal: controller ? controller.signal : undefined
          });
          var result = null;
          var contentType = response.headers.get("content-type") || "";
          if (contentType.indexOf("application/json") !== -1) result = await response.json();
          var providerErrors = result && (result.error || (Array.isArray(result.errors) ? result.errors.length > 0 : result.errors));
          var providerAcknowledged = result && (result.ok === true || result.success === true);
          // A 2xx HTML page may be a login/CAPTCHA screen, not an accepted enquiry.
          if (!response.ok || !providerAcknowledged || providerErrors) throw new Error("The form provider did not confirm acceptance of the enquiry.");
          status.textContent = "Your enquiry has been accepted by our form service. Thank you for contacting P.A.C.E.S. An enquiry does not confirm a service booking.";
          status.classList.add("is-success");
          form.reset();
          fields.forEach(clearError);
        } catch (error) {
          status.textContent = "We could not confirm that your enquiry was sent. Your details are still here. Please try again or call " + (config.phoneDisplay || "our team") + ".";
          status.classList.add("is-error");
        } finally {
          if (timeout) window.clearTimeout(timeout);
          if (submit) submit.disabled = false;
          form.removeAttribute("aria-busy");
        }
      });
    });

    // Optional progressive enhancement: content stays readable if observers fail.
    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      document.querySelectorAll(".reveal").forEach(function (element) { observer.observe(element); });
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
}());
