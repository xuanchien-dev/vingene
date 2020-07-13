 $("#nn1").select2({
            templateResult: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            },
            templateSelection: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            }
        });
            $("#nn2").select2({
            templateResult: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            },
            templateSelection: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            }
        });