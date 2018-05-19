$(() => {
    $("#submit-button").on("click", (e) => {
        e.preventDefault();
        const newBurger = $("#burger-input").val().trim();
        if (newBurger) {
            const data = {
                burger_name: newBurger,
                devoured: 0,
            };
            $.post("/burgers", data, () => {
                window.location.reload();
            });
        }
    });

    $("li").on("click", function () {
        const id = $(this).data("id");
        const data = {
            objColVals: { devoured: 1 },
            condition: { id },
        };
        $.ajax(`/burgers/${id}`, {
            type: "PUT",
            data,
        }).then(() => {
            window.location.reload();
        });
    });
});
