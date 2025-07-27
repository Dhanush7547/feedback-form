// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const comments = document.getElementById("comments");

    // Live comment character count
    const commentCounter = document.createElement("small");
    commentCounter.style.display = "block";
    commentCounter.style.marginTop = "5px";
    commentCounter.style.color = "#555";
    comments.parentNode.insertBefore(commentCounter, comments.nextSibling);

    comments.addEventListener("input", () => {
        const count = comments.value.length;
        commentCounter.textContent = `${count}/250 characters`;
        if (count > 250) {
            commentCounter.style.color = "red";
        } else {
            commentCounter.style.color = "#555";
        }
    });

    // Form submission handler
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent real form submission

        // Simple validation
        if (!nameInput.value.trim() || !emailInput.value.trim()) {
            alert("Please fill in all required fields: Name and Email.");
            [nameInput, emailInput].forEach((input) => {
                if (!input.value.trim()) {
                    input.style.borderColor = "red";
                } else {
                    input.style.borderColor = "#ccc";
                }
            });
            return;
        }

        if (comments.value.length > 250) {
            alert("Please keep your comments within 250 characters.");
            comments.style.borderColor = "red";
            return;
        }

        // All good
        alert("✅ Thank you for your feedback!");
        form.reset();
        commentCounter.textContent = "";
        [nameInput, emailInput, comments].forEach((input) => {
            input.style.borderColor = "#ccc";
        });
    });

    // Reset button styling reset
    form.addEventListener("reset", () => {
        setTimeout(() => {
            [nameInput, emailInput, comments].forEach((input) => {
                input.style.borderColor = "#ccc";
            });
            commentCounter.textContent = "";
        }, 50);
    });
});
