(() => {

    // ==========================================
    // WEDDING EVENT DATA – GROUPS 1 TO 4
    // ==========================================

    const groups = {

        // GROUP 1 – WEDDING ONLY
        ROYAL26: [
            {
                date: "2026-12-05",
                weekday: "Saturday",
                day: "05",
                month: "December 2026",
                heading: "The Wedding Day",
                subtitle: "A sacred union, a beautiful beginning",

                events: [
                    {
                        name: "Wedding Muhurta",
                        time: "12:17 PM",
                        note: "The auspicious wedding ceremony.",
                        image: "photos/event-mandap.png",
                        alt: "Decorated wedding mandap illustration"
                    },
                    {
                        name: "Wedding Lunch",
                        time: "1:00 PM – 3:00 PM",
                        note: "Let's continue the celebrations over a delicious meal.",
                        icon: "lunch"
                    }
                ]
            }
        ],


        // GROUP 2 – SIMANT POOJAN, SANGEET AND WEDDING
        CELEBRATE26: [
            {
                date: "2026-12-04",
                weekday: "Friday",
                day: "04",
                month: "December 2026",
                heading: "An Evening of Celebrations",
                subtitle: "Let the wedding festivities begin",

                events: [
                    {
                        name: "Simant Poojan",
                        time: "5:30 PM",
                        note: "Join us for this beautiful pre-wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Sangeet",
                        time: "7:00 PM",
                        note: "An evening filled with music, dance and celebration.",
                        icon: "music"
                    },
                    {
                        name: "Dinner",
                        time: "To follow",
                        note: "Join us for dinner and continue the celebrations.",
                        icon: "lunch"
                    }
                ]
            },

            {
                date: "2026-12-05",
                weekday: "Saturday",
                day: "05",
                month: "December 2026",
                heading: "The Wedding Day",
                subtitle: "A sacred union, a beautiful beginning",

                events: [
                    {
                        name: "Vidhi",
                        time: "7:30 AM – 10:00 AM",
                        note: "Join us for this sacred wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Baraat",
                        time: "11:00 AM",
                        note: "The groom's wedding procession.",
                        icon: "music"
                    },
                    {
                        name: "Wedding Muhurta",
                        time: "12:17 PM",
                        note: "The auspicious wedding ceremony.",
                        image: "photos/event-mandap.png",
                        alt: "Decorated wedding mandap illustration"
                    },
                    {
                        name: "Wedding Lunch",
                        time: "1:00 PM – 3:00 PM",
                        note: "Let's continue the celebrations over a delicious meal.",
                        icon: "lunch"
                    }
                ]
            }
        ],


        // GROUP 3 – FAMILY
        FAMILY26: [
            {
                date: "2026-12-03",
                weekday: "Thursday",
                day: "03",
                month: "December 2026",
                heading: "Mehendi Celebrations",
                subtitle: "An evening of colour, joy and togetherness",

                events: [
                    {
                        name: "Mehendi",
                        time: "6:00 PM onwards",
                        note: "Join us for an evening of beautiful celebrations.",
                        venue: "Moreshwar Sabhagruha",
                        venueUrl: "https://share.google/pEBZcc7Z67hunj8Bg",
                        icon: "ritual"
                    },
                    {
                        name: "Dinner",
                        time: "To follow",
                        note: "Continue the celebrations over dinner.",
                        icon: "lunch"
                    }
                ]
            },

            {
                date: "2026-12-04",
                weekday: "Friday",
                day: "04",
                month: "December 2026",
                heading: "An Evening of Celebrations",
                subtitle: "Let the wedding festivities begin",

                events: [
                    {
                        name: "Simant Poojan",
                        time: "5:30 PM – 7:30 PM",
                        note: "Join us for this beautiful pre-wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Sangeet",
                        time: "7:30 PM onwards",
                        note: "An evening filled with music, dance and celebration.",
                        icon: "music"
                    },
                    {
                        name: "Dinner",
                        time: "To follow",
                        note: "Join us for dinner and continue the celebrations.",
                        icon: "lunch"
                    }
                ]
            },

            {
                date: "2026-12-05",
                weekday: "Saturday",
                day: "05",
                month: "December 2026",
                heading: "The Wedding Day",
                subtitle: "A sacred union, a beautiful beginning",

                events: [
                    {
                        name: "Vidhi",
                        time: "7:30 AM – 10:00 AM",
                        note: "Join us for this sacred wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Baraat",
                        time: "11:00 AM",
                        note: "The groom's wedding procession.",
                        icon: "music"
                    },
                    {
                        name: "Wedding Muhurta",
                        time: "12:17 PM",
                        note: "The auspicious wedding ceremony.",
                        image: "photos/event-mandap.png",
                        alt: "Decorated wedding mandap illustration"
                    },
                    {
                        name: "Wedding Lunch",
                        time: "1:00 PM – 3:00 PM",
                        note: "Let's continue the celebrations over a delicious meal.",
                        icon: "lunch"
                    }
                ]
            }
        ],


        // GROUP 4 – BLESSED
        BLESSED26: [
            {
                date: "2026-12-01",
                weekday: "Tuesday",
                day: "01",
                month: "December 2026",
                heading: "The Wedding Festivities Begin",
                subtitle: "A day of auspicious beginnings and blessings",

                events: [
                    {
                        name: "Haldi",
                        time: "7:30 AM – 9:00 AM",
                        note: "Venue: Our Home",
                        icon: "ritual"
                    },
                    {
                        name: "Grahamakh",
                        time: "10:30 AM – 12:30 PM",
                        note: "Venue: Our Home. Lunch to follow.",
                        icon: "ritual"
                    }
                ]
            },

            {
                date: "2026-12-03",
                weekday: "Thursday",
                day: "03",
                month: "December 2026",
                heading: "An Afternoon of Colour and Celebration",
                subtitle: "Come celebrate the festivities with us",

                events: [
                    {
                        name: "Mehendi",
                        time: "6:00 PM onwards",
                        note: "Join us for an evening of beautiful celebrations.",
                        venue: "Moreshwar Sabhagruha",
                        venueUrl: "https://share.google/pEBZcc7Z67hunj8Bg",
                        icon: "ritual"
                    },
                    {
                        name: "Dinner",
                        time: "To follow",
                        note: "Continue the celebrations over dinner.",
                        icon: "lunch"
                    }
                ]
            },

            {
                date: "2026-12-04",
                weekday: "Friday",
                day: "04",
                month: "December 2026",
                heading: "An Evening of Celebrations",
                subtitle: "Let the wedding festivities begin",

                events: [
                    {
                        name: "Simant Poojan",
                        time: "5:30 PM – 7:30 PM",
                        note: "Join us for this beautiful pre-wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Sangeet",
                        time: "7:30 PM onwards",
                        note: "An evening filled with music, dance and celebration.",
                        icon: "music"
                    },
                    {
                        name: "Dinner",
                        time: "To follow",
                        note: "Join us for dinner and continue the celebrations.",
                        icon: "lunch"
                    }
                ]
            },

            {
                date: "2026-12-05",
                weekday: "Saturday",
                day: "05",
                month: "December 2026",
                heading: "The Wedding Day",
                subtitle: "A sacred union, a beautiful beginning",

                events: [
                    {
                        name: "Vidhi",
                        time: "7:30 AM – 10:00 AM",
                        note: "Join us for this sacred wedding ritual.",
                        icon: "ritual"
                    },
                    {
                        name: "Baraat",
                        time: "11:00 AM",
                        note: "The groom's wedding procession.",
                        icon: "music"
                    },
                    {
                        name: "Wedding Muhurta",
                        time: "12:17 PM",
                        note: "The auspicious wedding ceremony.",
                        image: "photos/event-mandap.png",
                        alt: "Decorated wedding mandap illustration"
                    },
                    {
                        name: "Wedding Lunch",
                        time: "1:00 PM – 3:00 PM",
                        note: "Let's continue the celebrations over a delicious meal.",
                        icon: "lunch"
                    }
                ]
            }
        ]

    };


    // ==========================================
    // READ INVITATION CODE FROM URL
    // ==========================================

    const params = new URLSearchParams(window.location.search);
    const requestedCode = params.get("invite");

    const selectedGroup = groups[requestedCode]
        ? requestedCode
        : "ROYAL26";


    // ==========================================
    // UPDATE MAIN EVENTS HEADING
    // Preserve the original heading font and markup
    // ==========================================

    const eventsHeading = document.querySelector(
        "#weddingCountdown .events-page-heading h2"
    );

    if (eventsHeading) {

    const headingAccent = eventsHeading.querySelector("span, em");

    // Change only the text nodes, retaining the original styled element.
    if (headingAccent) {

        Array.from(eventsHeading.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove();
            }
        });

        eventsHeading.insertBefore(
            document.createTextNode(
                selectedGroup === "ROYAL26" ? "Ceremony" : "Our Wedding "
            ),
            headingAccent
        );

        headingAccent.textContent =
            selectedGroup === "ROYAL26" ? " Details" : "Events";

    } else {

        eventsHeading.textContent =
            selectedGroup === "ROYAL26"
                ? "Ceremony Details"
                : "Our Wedding Events";
    }
}


    // ==========================================
    // COUNTDOWN VISIBILITY
    // ==========================================

    const countdownTimer = document.getElementById("weddingCountdownTimer");

    if (countdownTimer) {
        countdownTimer.style.display =
            selectedGroup === "CELEBRATE26" ? "none" : "";
    }


    // ==========================================
    // FIND HTML TEMPLATES
    // ==========================================

    const eventsContainer = document.getElementById("groupEventsList");

    const dayTemplate = document.getElementById("groupEventTemplate");

    const eventTemplate = document.getElementById("individualEventTemplate");


    if (!eventsContainer || !dayTemplate || !eventTemplate) {
        console.error("Wedding event templates or container not found.");
        return;
    }


    // ==========================================
    // EVENT ARTWORK / ICONS
    // ==========================================

    function createEventArtwork(event) {

        const artwork = document.createElement("div");

        artwork.className = "group-event-art";

        if (event.image) {

            const image = document.createElement("img");

            image.src = event.image;
            image.alt = event.alt || "";
            image.loading = "lazy";

            artwork.appendChild(image);

        } else {

            const icon = document.createElement("span");

            icon.className = "group-event-icon";
            icon.setAttribute("aria-hidden", "true");

            const icons = {
                lunch: "♨",
                ritual: "✧",
                music: "♫"
            };

            icon.textContent = icons[event.icon] || "✧";

            artwork.appendChild(icon);
        }

        return artwork;
    }


    // ==========================================
    // CREATE INDIVIDUAL EVENT
    // ==========================================

    function createEvent(event) {

        const fragment = eventTemplate.content.cloneNode(true);

        const item = fragment.querySelector(".group-event-item");

        const artworkPlaceholder = item.querySelector(".group-event-art");

        if (artworkPlaceholder) {
            artworkPlaceholder.replaceWith(createEventArtwork(event));
        }

        item.querySelector(".group-event-name").textContent = event.name;

        item.querySelector(".group-event-time").textContent = event.time;

        const noteElement = item.querySelector(".group-event-note");
        noteElement.textContent = event.note || "";

        if (event.venue) {

            const venueLine = document.createElement("span");
            venueLine.className = "group-event-venue";

            const venueLabel = document.createElement("strong");
            venueLabel.textContent = "Venue: ";

            const venueLink = document.createElement("a");
            venueLink.href = event.venueUrl;
            venueLink.textContent = event.venue;
            venueLink.target = "_blank";
            venueLink.rel = "noopener noreferrer";

            venueLine.append(venueLabel, venueLink);

            noteElement.appendChild(document.createElement("br"));
            noteElement.appendChild(venueLine);
        }

        return fragment;
    }


    // ==========================================
    // CREATE EVENT DAY
    // ==========================================

    function createEventDay(day) {

        const fragment = dayTemplate.content.cloneNode(true);

        fragment.querySelector(".group-event-weekday").textContent = day.weekday;

        fragment.querySelector(".group-event-number").textContent = day.day;

        fragment.querySelector(".group-event-month").textContent = day.month;

        fragment.querySelector(".group-event-title").textContent = day.heading;

        fragment.querySelector(".group-event-subtitle").textContent = day.subtitle;

        const eventContainer = fragment.querySelector(".group-event-items");

        day.events.forEach(event => {
            eventContainer.appendChild(createEvent(event));
        });

        return fragment;
    }


    // ==========================================
    // DISPLAY SELECTED GROUP EVENTS
    // ==========================================

    eventsContainer.replaceChildren();

    groups[selectedGroup].forEach(day => {
        eventsContainer.appendChild(createEventDay(day));
    });


    console.log("Wedding invitation loaded:", selectedGroup);

})();