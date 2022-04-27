(function() {
    // Custom JS DataTable
    $('#post_table').DataTable({
        "bSort": false,
        "lengthChange": false,
        "iDisplayLength": 10,
        "columnDefs": [{
            "targets": [6],
            "searchable": false,
            "visible": true
        }]
    });

    // // Custom JS Bootstrap DatePicker
    // $('#bs_datepicker_range_container_new').datepicker({
    //     autoclose: true,
    //     container: '#bs_datepicker_range_container_new',
    //     todayHighlight: true,
    //     startDate: '0d',
    //     format: 'dd M yyyy'
    // });

    // $('#bs_datepicker_range_container_edit').datepicker({
    //     autoclose: true,
    //     container: '#bs_datepicker_range_container_edit',
    //     todayHighlight: true,
    //     startDate: '0d',
    //     format: 'dd M yyyy'
    // });

    // $('#bs_datepicker_range_container_event').datepicker({
    //     autoclose: true,
    //     container: '#bs_datepicker_range_container_event',
    //     todayHighlight: true,
    //     startDate: '0d',
    //     format: 'dd M yyyy'
    // });

    // Custom JQuery Validator
    $('.new_form_validate').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    $('.edit_form_validate').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    // Custom JQuery Validator for Users page
    $('.new_user_validate').validate({
        rules: {
            'username': {
                required: true,
                alreadyExists: true
            },
            'role': {
                required: true
            },
            'school': {
                required: true
            }
        },
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    // Custom JQuery Validator for Employment page
    $('.edit_form_validate_job_dates').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    $('.edit_form_validate_job_file').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    // Custom JQuery Validator for Links page
    $('.edit_form_validate_link').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    $('.edit_form_validate_file').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    // Custom JQuery Validator for Profile
    $('.profile_name').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    $('.profile_password').validate({
        rules: {
            'r_password': {
                required: true,
                equalTo: '#new_password'
            }
        },
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });

    // Custom JQuery Validator for School Information
    $('.school_info').validate({
        unhighlight: function(input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function(error, element) {
            $(element).parents('.form-group').append(error);
        }
    });
})();