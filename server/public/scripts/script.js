var values = {};

$(document).ready(function(){
    $('#operators').on('click', '.operation', opClick);
    $('#clear').on('click', clearTotal);
});

function opClick() {
    event.preventDefault();
    values.type = this.dataset.type;
    $.each($('form').serializeArray(), function(i,field){
        values[field.name] = field.value;
    });
    console.log(values);

    $.ajax({
        url: '/calculate',
        type: 'POST',
        data: values,
        success: function(response){
            totalToDom(response.value)
        }
    });
    $('form').find("input[type=text]").val("");
}

function totalToDom(total){
    $('#total').children('span').text(total);
}

function clearTotal() {
    $('#total').children('span').text("");
}