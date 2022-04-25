function alertDesign(e) {
    var type = $(e).data('type');
    var id = $(e).data('id');
    var name = $(e).data('name');

    if (type === 'delete-job') {
        showDisableJobConfirm(id, name);
    } else if (type === 'reopen-job') {
        showReopenJobConfirm(id, name);
    } else if (type === 'delete-event') {
        var post = $(e).data('post');
        showDisableEventConfirm(id, name, post);
    } else if (type === 'delete-cat') {
        showDisableCatConfirm(id, name);
    } else if (type === 'delete-link') {
        showDisableLinkConfirm(id, name);
    } else if (type === 'reopen-link') {
        showReactivateLinkConfirm(id, name);
    } else if (type === 'delete-logs') {
        showDeleteLogsConfirm();
    } else if (type === 'delete-inquiry'){
        showDeleteInquiryConfirm(id, name);
    } else if (type === 'delete-contact'){
        showDeleteContactConfirm(id, name);
    } else if (type === 'reactivate-contact'){
        showReactivateContactConirm(id, name);
    } else if (type === 'delete-form'){
        showDisableFormConfirm(id, name);
    } else if (type === 'reopen-form'){
        showReactivateFormConfirm(id, name);
    } else if (type === 'delete-package'){
        showDisablePackageConfirm(id, name);
    } else if (type === 'reopen-package'){
        showReactivatePackageConfirm(id, name);
    } else if (type === 'delete-minutes'){
        showDisableMinutesConfirm(id, name);
    } else if (type === 'reopen-minutes'){
        showReactivateMinutesConfirm(id, name);
    } else if (type === 'delete-page'){
        var subtab = $(e).data('subtab');
        var page = $(e).data('page');
        showDisablePageConfirm(id, name, subtab, page);
    } else if (type === 'delete-carousel-image'){
        showDisableCarouselImageConfirm(id);
    } else if (type === 'delete-directive'){
        showDisableDirectiveConfirm(id, name);
    } else if (type === 'reopen-directive'){
        showReactivateDirectiveConfirm(id, name);
    } else if (type === 'delete-policy'){
        showDisablePolicyConfirm(id, name);
    } else if (type === 'reopen-policy'){
        showReactivatePolicyConfirm(id, name);
    } else if (type === 'delete-policy-ssd'){
        showDisablePolicyConfirmSSD(id, name);
    } else if (type === 'reopen-policy-ssd'){
        showReactivatePolicyConfirmSSD(id, name);
    } else if (type === 'delete-plan'){
        showDisablePlanConfirm(id, name);
    } else if (type === 'reopen-plan'){
        showReactivatePlanConfirm(id, name);
    } else if (type === 'delete-post-integrate') {
        var event = $(e).data('event');
        showDisablePostIntegrateConfirm(id, name, event);
    }
}

//Warning for closing job posting
function showDisableJobConfirm(id, name) {
    swal({
        title: "Are you sure you want to close this job posting?",
        text: "Only those with the HR and Administrator role can reopen the job posting",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&jobDisable=true&id=" + id + "&job=" + name;
        }

    });
}

//Warning for reopening job posting
function showReopenJobConfirm(id, name) {
    swal({
        title: "Are you sure you want to reopen this job posting?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: true,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            $('#edit-job-dates-modal').modal('show');
            $('#edit-job-dates-modal').on('shown.bs.modal', function () {
                editJobDates(id, name, 0);
            });
        }

    });
}

//Warning for cancelling event
function showDisableEventConfirm(id, name, post) {
    swal({
        title: "Are you sure you want to cancel this event?",
        text: "You won't be able to reactivate this event after this",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/post.php?post=true&eventDisable=true&id=" + id + "&event=" + name + "&post=" + post;
        }

    });
}

//Warning for disabling category
function showDisableCatConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this category?",
        text: "You won't be able to reactivate this category after this",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/post.php?post=true&catDisable=true&id=" + id + "&cat=" + name;
        }

    });
}

//Warning for disabling post - integrated
function showDisablePostIntegrateConfirm(id, name, event) {
    swal({
        title: "Are you sure you want to disable this post?",
        text: "You won't be able to reactivate this post once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            if (event === 1) {
                window.location = "../functions/post.php?post=true&postDisableEventIntegrated=true&id=" + id + "&postName=" + name;
            } else {
                window.location = "../functions/post.php?post=true&postDisableIntegrated=true&id=" + id + "&postName=" + name;
            }


        }

    });
}

//Warning for disabling link
function showDisableLinkConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this link?",
        text: "You will be able to reactivate this link once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/post.php?post=true&linkDisable=true&id=" + id + "&linkName=" + name;
        }

    });
}

//Warning for reactivating link
function showReactivateLinkConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this link?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/post.php?post=true&linkReactivate=true&id=" + id + "&linkName=" + name;
        }

    });
}

//Warning for deleting logs
function showDeleteLogsConfirm() {
    swal({
        title: "Are you sure you want to delete all logs?",
        text: "You won't be able to recover the deleted logs",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/dashboard.php?dashboard=true&logDelete=true";
        }

    });
}

//Warning for deleting inquiries
function showDeleteInquiryConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this inquiry information?",
        text: "You won't be able to undo this action once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&inquiryDisable=true&id=" + id + "&inquiryName=" + name;
        }

    });
}

//Warning for disabling contact
function showDeleteContactConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this contact entry?",
        text: "You can reactivate this contact entry later",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&contactDisable=true&id=" + id + "&contactRole=" + name;
        }

    });
}

//Warning for reactivating contact
function showReactivateContactConirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this contact entry?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&contactReactivate=true&id=" + id + "&contactRole=" + name;
        }

    });
}

//Warning for disabling form
function showDisableFormConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this file?",
        text: "You will be able to reactivate this file once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&formDisable=true&id=" + id + "&formName=" + name;
        }

    });
}

//Warning for reactivating form
function showReactivateFormConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this file?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&formReactivate=true&id=" + id + "&formName=" + name;
        }

    });
}

//Warning for disabling package
function showDisablePackageConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this Board Meeting Package?",
        text: "You will be able to reactivate this Board Meeting Package once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&packageDisable=true&id=" + id + "&packageName=" + name;
        }

    });
}

//Warning for reactivating package
function showReactivatePackageConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this Board Meeting Package?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&packageReactivate=true&id=" + id + "&packageName=" + name;
        }

    });
}

//Warning for disabling minutes
function showDisableMinutesConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this Board Meeting Minutes?",
        text: "You will be able to reactivate this Board Meeting Minutes once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&minutesDisable=true&id=" + id + "&minutesName=" + name;
        }

    });
}

//Warning for reactivating minutes
function showReactivateMinutesConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this Board Meeting Minutes?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&minutesReactivate=true&id=" + id + "&minutesName=" + name;
        }

    });
}

//Warning for disabling page file
function showDisablePageConfirm(id, name, subtab, page) {
    swal({
        title: "Are you sure you want to disable this page file?",
        text: "You will not be able to reactivate this page file once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&pageDisable=true&id=" + id + "&pageName=" + name + "&subtab=" + subtab + "&page=" + page;
        }

    });
}

//Warning for disabling carousel image
function showDisableCarouselImageConfirm(id) {
    swal({
        title: "Are you sure you want to delete this image from the home carousel?",
        text: "You will not be able to reactivate this image once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&carouselImageDisable=true&id=" + id;
        }

    });
}

//Warning for disabling directive
function showDisableDirectiveConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this process/directive?",
        text: "You will be able to reactivate this process/directive once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&directiveDisable=true&id=" + id + "&directiveName=" + name;
        }

    });
}

//Warning for reactivating directive
function showReactivateDirectiveConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this process/directive?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&directiveReactivate=true&id=" + id + "&directiveName=" + name;
        }

    });
}

//Warning for disabling policy
function showDisablePolicyConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this policy?",
        text: "You will be able to reactivate this policy once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&policyDisable=true&id=" + id + "&policyName=" + name;
        }

    });
}

//Warning for reactivating policy
function showReactivatePolicyConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this policy?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&policyReactivate=true&id=" + id + "&policyName=" + name;
        }

    });
}

//Warning for disabling policy
function showDisablePolicyConfirmSSD(id, name) {
    swal({
        title: "Are you sure you want to disable this policy?",
        text: "You will be able to reactivate this policy once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&policyDisable=true&id=" + id + "&policyName=" + name;
        }

    });
}

//Warning for reactivating policy
function showReactivatePolicyConfirmSSD(id, name) {
    swal({
        title: "Are you sure you want to reactivate this policy?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/interaction.php?interaction=true&policyReactivate=true&id=" + id + "&policyName=" + name;
        }

    });
}

//Warning for disabling plan
function showDisablePlanConfirm(id, name) {
    swal({
        title: "Are you sure you want to disable this strategic plan?",
        text: "You will be able to reactivate this plan once archived",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&planDisable=true&id=" + id + "&planName=" + name;
        }

    });
}

//Warning for reactivating plan
function showReactivatePlanConfirm(id, name) {
    swal({
        title: "Are you sure you want to reactivate this strategic plan?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#00BCD4",
        confirmButtonText: "CONFIRM",
        cancelButtonText: "CANCEL",
        closeOnConfirm: false,
        closeOnCancel: true
    }, function (isConfirm) {
        if (isConfirm) {
            window.location = "../functions/district.php?district=true&planReactivate=true&id=" + id + "&planName=" + name;
        }

    });
}