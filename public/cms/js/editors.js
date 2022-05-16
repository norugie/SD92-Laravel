$(function() {
    //TinyMCE
    tinymce.init({
        selector: ".tinymce_editor",
        theme: "silver",
        height: 300,
        plugins: 'advlist autolink lists link image charmap preview searchreplace wordcount visualblocks visualchars code fullscreen save table directionality',
        toolbar1: 'undo redo | preview | print | forecolor backcolor | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        removed_menuitems: 'newdocument, nonbreaking, insertdatetime, anchor, pagebreak',
        relative_urls: false,
        remove_script_host: false,
        document_base_url: 'localhost:8000', // Change origin URL once site is online
        image_advtab: true,
        images_upload_url: '/cms/upload/editor',
        image_class_list: [
            { title: 'Responsive', value: 'img-responsive img-fluid' }
        ],

        // Override default upload handler
        images_upload_handler: function(blobInfo, success, failure) {
            var xhr, formData;
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/cms/upload/editor');
            var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            xhr.setRequestHeader('X-CSRF-Token', token);
            xhr.onload = function() {
                var json;

                if (xhr.status === 403) {
                    failure('HTTP Error: ' + xhr.status, { remove: true });
                    return;
                }

                if (xhr.status < 200 || xhr.status >= 300) {
                    failure('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);

                if (!json || typeof json.location != 'string') {
                    failure('Invalid JSON: ' + xhr.responseText);
                    return;
                }

                success(json.location);
                console.log(json);
            };

            xhr.onerror = function() {
                failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
            };

            formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            xhr.send(formData);
        }
    });
});