@extends ( 'cms.layout.layout' )

@section ( 'custom-css' )
    {{-- Additional header tags for page: /create --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" type="text/css" id="u0" href="/plugins/jquery-ui/jquery-ui.min.css">
    <link rel="stylesheet" type="text/css" id="u0" href="/plugins/tinymce/skins/lightgray/skin.min.css">
    <link rel="stylesheet" type="text/css" id="u0" href="/plugins/bootstrap-tokenfield/dist/css/tokenfield-typeahead.min.css">
    <link rel="stylesheet" type="text/css" id="u0" href="/plugins/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.min.css">
@endsection

@section ( 'custom-js' )
    <script src="/plugins/tinymce/tinymce.min.js"></script>
    <script src="/cms/js/editors.js"></script>

    <script src="/plugins/jquery-ui/jquery-ui.min.js"></script>
    <script src="/plugins/bootstrap-tokenfield/dist/bootstrap-tokenfield.min.js"></script>
    <script src="/plugins/bootstrap-tokenfield/dist/typeahead.bundle.min.js"></script>
    <script>
        var sources = @json($categories->toArray(), JSON_HEX_TAG);
        var source = [];

        $(sources).each(function(){
            source.push({"id": this.id, "value": this.cat_name});
        });

        var engine = new Bloodhound({
            local: source,
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.value);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace
        });

        engine.initialize();

        function existingTokenIdFunction () {
            var e = $('input[name=post_categories_id]').val();
            e = e.split(',');
            e = e.filter(function (e) {
                if(e !== "" && e !== null) return e;
            });

            return e;
        }

        $('#post_categories').tokenfield({
            typeahead: [null, { source: engine.ttAdapter() }]
        });

        $('#post_categories')
        .on('tokenfield:createtoken', function (event) {
            var existingTokens = $(this).tokenfield('getTokens');
            $.each(existingTokens, function(index, token) {
                if (token.value === event.attrs.value)
                    event.preventDefault();
            });
        })
        .on('tokenfield:createdtoken', function (event) {
            var existingTokenIds = existingTokenIdFunction();
            existingTokenIds.push(JSON.stringify(event.attrs.id));
            $('input[name=post_categories_id]').val(existingTokenIds.join(','));
        })
        .on('tokenfield:removedtoken', function (event) {
            var existingTokenIds = existingTokenIdFunction();
            existingTokenIds.splice($.inArray(event.attrs.id + '', existingTokenIds), 1);
            $('input[name=post_categories_id]').val(existingTokenIds.join(','));
        });
    </script>
@endsection

@section ( 'content' )
<div class="row clearfix">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
            <div class="header">
                <div class="row clearfix">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 text-xs-sm-center">
                        <h4>NEW POST</h4>      
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <center>
                            <a href="/cms/posts/posts" type="button" class="btn bg-blue waves-effect" style="display: inline-block;"><i class="material-icons">list</i><span>LIST</span></a>
                        </center>
                    </div>
                </div>
            </div>
            <div class="body">
                <p class="font-12"><i><b>Note:</b> Fields marked with an asterisk are required</i></p><br>
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <form class="new_form_validate" action="/cms/posts/posts/create" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_title">Post Title *</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" class="form-control" id="post_title" name="post_title" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_categories">Post Categories</label>
                                    <p class="font-12"><i><b>Note:</b> Leaving this section blank will automatically tag your post to "Uncategorized".</i></p>
                                    <div class="form-group">
                                        <input type="text" value="" name="post_categories_id" hidden>
                                        <div class="form-line">
                                            <input type="text" class="form-control" id="post_categories" name="post_categories">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_sm_autopost">Post on SD92 Social Media Platforms?</label>
                                    <p class="font-12"><i><b>Note:</b> Posting on to SD92's social media outlets will take at least 15 minutes to 2 hours after the post's creation.</i></p>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_sm_autopost" id="sm_opt_1" class="radio-col-blue-grey with-gap" value="No" checked>
                                        <label for="sm_opt_1">No</label>
                                        <input type="radio" name="post_sm_autopost" id="sm_opt_2" class="radio-col-blue-grey with-gap" value="Yes">
                                        <label for="sm_opt_2">Yes</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="post_ssd_autopost">Post on School District Superintendent Page?</label>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_ssd_autopost" id="ssd_opt_1" class="radio-col-blue-grey with-gap" value="No" checked>
                                        <label for="ssd_opt_1">No</label>
                                        <input type="radio" name="post_ssd_autopost" id="ssd_opt_2" class="radio-col-blue-grey with-gap" value="Yes">
                                        <label for="ssd_opt_2">Yes</label>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="post_nlc_autopost">Post on Nisga'a Language and Culture?</label>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_nlc_autopost" id="nlc_opt_1" class="radio-col-blue-grey with-gap" value="No" checked>
                                        <label for="nlc_opt_1">No</label>
                                        <input type="radio" name="post_nlc_autopost" id="nlc_opt_2" class="radio-col-blue-grey with-gap" value="Yes">
                                        <label for="nlc_opt_2">Yes</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="post_gcc_autopost">Post on Gitginsaa Childcare Centre?</label>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_gcc_autopost" id="gcc_opt_1" class="radio-col-blue-grey with-gap" value="No" checked>
                                        <label for="gcc_opt_1">No</label>
                                        <input type="radio" name="post_gcc_autopost" id="gcc_opt_2" class="radio-col-blue-grey with-gap" value="Yes">
                                        <label for="gcc_opt_2">Yes</label>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <label for="post_ss_autopost">Post on SD92 Strong Start?</label>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_ss_autopost" id="ss_opt_1" class="radio-col-blue-grey with-gap" value="No" checked>
                                        <label for="ss_opt_1">No</label>
                                        <input type="radio" name="post_ss_autopost" id="ss_opt_2" class="radio-col-blue-grey with-gap" value="Yes">
                                        <label for="ss_opt_2">Yes</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_opt">Set post as News or Media</label>
                                    <p class="font-12"><i><b>Note:</b> Setting post to Media will let your upload images in gallery sets.</i></p>
                                    <div class="demo-radio-button">
                                        <input type="radio" name="post_opt_type" id="post_opt_news" class="radio-col-blue-grey with-gap" value="Post" checked>
                                        <label for="post_opt_news">News</label>
                                        <input type="radio" name="post_opt_type" id="post_opt_media" class="radio-col-blue-grey with-gap" value="Media">
                                        <label for="post_opt_media">Media</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_thumbnail">Post Thumbnail</label>
                                    <p class="font-12"><i><b>Note:</b> The max image size you can upload is 10 MB.</i></p>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="file" name="file" id="post_thumbnail" accept="image/x-png, image/jpeg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_desc">Post Description</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <textarea rows="2" class="form-control no-resize" id="post_desc" name="post_desc"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <label for="post_content" style="margin-bottom:10px;">Post Content</label><br>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <textarea class="tinymce_editor" id="post_content" name="post_content">
        
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row clearfix dropzone-area" hidden>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <p class="font-12"><i><b>Note:</b> This is an experimental feature. Uploading images over 1.5 MB may take a while. The max image size you can upload is 10 MB.</i></p>
                                    <div id="dropzone-gallery" class="dropzone">
                                        <div class="dz-default dz-message">
                                            <div class="drag-icon-cph">
                                                <i class="material-icons">touch_app</i>
                                            </div>
                                            <h3>Drop images here or click to upload</h3>
                                        </div>
                                    </div>
                                    <input type="text" id="image_name" name="image_name" value="" hidden>
                                </div>
                            </div>
                            <div class="row clearfix">
                                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12" style="float: right;">
                                    <button type="submit" class="btn bg-blue-grey btn-block btn-lg waves-effect">SAVE</button>  
                                </div>
                            </div>                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection