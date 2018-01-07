$(function () {
    $("#map-area").mapael({
        map: {
            name: "nigeria",
            defaultArea: {
                attrs: {
                    fill: "#f4f4e8"
                    , stroke: "#ced8d0"
                }
            }
        },
        plots: {
            'taraba': {
                latitude: 8,
                longitude: 10.5,
                tooltip: {content: "Taraba State<br />"
                    +"<small><strong>Capital:</strong> Jalingo</small>"}
            },
            'kwara': {
                latitude: 8.5,
                longitude: 5,
                tooltip: {content: "Kwara State<br />"
                    +"<small><strong>Capital:</strong> Ilorin</small>"}
            },
            'kano': {
                latitude: 11.5,
                longitude: 8.5,
                tooltip: {content: "Kano State<br />"
                    +"<small><strong>Capital:</strong> Kano</small>"}
            },
            'cross-river': {
                latitude: 5.75,
                longitude: 8.5,
                tooltip: {content: "Cross-River State<br />"
                    +"<small><strong>Capital:</strong> Port Harcourt</small>"}
            }
        }
    });
});