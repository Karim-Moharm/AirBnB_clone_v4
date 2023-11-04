$(document).ready(function () {
    // let amenities = [];
    let checkboxId = $('input:checkbox');

    let list = []
    $('input').change(() => {
        if (checkboxId.is(':checked')) {
            console.log('done');
        }
        else {
            console.log('not done')
        }
    });

});