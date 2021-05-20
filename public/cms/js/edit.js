function editJob(jobInfo) {
    job = $(jobInfo).data("values");

    $("#edit-title").attr("value", job['title']);
    $("#edit-jobdesc").val(job['job_desc']);
    $("#edit-school").selectpicker("val", job['school']);
    $("#edit-jobtype").selectpicker("val", job['job_type']);
    $("#edit-job-id-num").attr("value", job['id']);
    $("#edit-jobid-hidden").attr("value", job['job_id'].replace("JOB", ""));

}

function editJobDates(id, name, identifier) {
    $("#edit-job-id").attr("value", id);
    $("#edit-job-name").attr("value", name);
    $("#edit-job-identifier").attr("value", identifier);
}

function editJobFile(id, name) {
    $("#edit-job-id-file").attr("value", id);
    $("#edit-job-name-file").attr("value", name);
}

function editEvent(eventInfo) {
    event = $(eventInfo).data("values");

    $("#edit_event_shortname").attr("value", event['event_shortname']);
    $("#edit_event_desc").val(event['event_desc']);
    $("#edit_event_name").attr("value", event['event_name']);
    $("#edit_event_id").attr("value", event['id']);
    $("#edit_event_id_name").attr("value", event['event_id']);
    $("#edit_event_location").attr("value", event['event_location']);

}

function viewPost(postInfo) {

    post = $(postInfo).data("values");
    post_date = formatDate(new Date(post['post_date']));

    $("#view-post-title").html(post['post_title']);
    $("#view-post-author").html(post['firstname'] + " " + post['lastname']);
    $("#view-post-date").html(post_date);
    $("#view-post-content").html(post['post_text']);

}

function editMedia(mediaInfo) {

    media = $(mediaInfo).data("values");

    $("#edit_media_post_id").attr("value", media['id']);
    $("#edit_media_post_id_name").attr("value", media['post_id']);
    $("#edit_media_post_title").attr("value", media['post_title']);
    $("#edit_media_post_content").val(media['post_text']);

}

function viewMediaPost(mediaInfo) {

    media = $(mediaInfo).data("values");
    media_date = formatDate(new Date(media['post_date']));

    $("#view-media-title").html(media['post_title']);
    $("#view-media-author").html(media['firstname'] + " " + media['lastname']);
    $("#view-media-date").html(media_date);
    $("#view-media-content").html(media['post_text']);

}

function editLink(linkInfo) {

    link = $(linkInfo).data("values");

    // Link type: Link
    $("#edit_link_id_link").attr("value", link['id']);
    $("#edit_link_id_name_link").attr("value", link['link_id']);
    $("#edit_link_id_type_link").attr("value", link['link_type']);
    $("#edit_link_title_link").attr("value", link['link_name']);
    $("#edit_link_desc_link").val(link['link_desc']);
    $("#edit_link_content_link").attr("value", link['link_content']);
    $("#edit_link_tag_link").selectpicker("val", link['link_tag']);

    // Link type: File
    $("#edit_link_id_file").attr("value", link['id']);
    $("#edit_link_id_name_file").attr("value", link['link_id']);
    $("#edit_link_id_file_file").attr("value", link['link_content']);
    $("#edit_link_id_type_file").attr("value", link['link_type']);
    $("#edit_link_title_file").attr("value", link['link_name']);
    $("#edit_link_desc_file").val(link['link_desc']);
    $("#edit_link_tag_file").selectpicker("val", link['link_tag']);

}

function editAboutPrograms(aboutProgramsInfo) {

    abtprg = $(aboutProgramsInfo).data("values");

    $("#edit_about_programs_id").attr("value", abtprg['id']);
    $("#edit_about_programs_name").attr("value", abtprg['web_id']);
    $("#edit_field_name").val(abtprg['web_desc']);

}

function editBOE(boeInfo) {

    boe = $(boeInfo).data("values");

    $("#edit_boe_id").attr("value", boe['id']);
    $("#edit_boe_name").attr("value", boe['position']);
    $("#edit_boe_firstname").attr("value", boe['firstname']);
    $("#edit_boe_lastname").attr("value", boe['lastname']);
    $("#edit_boe_email").attr("value", boe['email']);
    $("#edit_boe_phone").attr("value", boe['phone']);
    $("#edit_boe_trustee_for").attr("value", boe['position_specifics']);
    $("#edit_boe_previous_photo").attr("value", boe['photo']);
    $("#edit_boe_writeup").val(boe['contact_desc']);

}

function editInquiry(inquiryInfo) {

    inquiry = $(inquiryInfo).data("values");

    // Inquiry type: File
    $("#edit_inquiry_id_file").attr("value", inquiry['id']);
    $("#edit_inquiry_id_name_file").attr("value", inquiry['link_id']);
    $("#edit_inquiry_id_type_file").attr("value", inquiry['link_type']);
    $("#edit_inquiry_id_file_file").attr("value", inquiry['link_content']);
    $("#edit_inquiry_title_file").attr("value", inquiry['link_name']);
    $("#edit_inquiry_desc_file").val(inquiry['link_desc']);

}

function editSchool(schoolInfo) {

    school = $(schoolInfo).data("values");

    $("#edit_school_id").attr("value", school['id']);
    $("#edit_school_id_name").attr("value", school['school_abbv']);
    $("#edit_school_name").attr("value", school['school_name']);
    $("#edit_school_abbv").attr("value", school['school_abbv']);
    $("#edit_school_head").attr("value", school['school_principal']);
    $("#edit_school_address").attr("value", school['school_addr']);
    $("#edit_school_email").attr("value", school['school_email']);
    $("#edit_school_phone").attr("value", school['school_phone']);

}

function editContact(contactInfo) {
    contact = $(contactInfo).data("values");

    $("#edit_contact_id").attr("value", contact['id']);
    $("#edit_contact_firstname").attr("value", contact['firstname']);
    $("#edit_contact_lastname").attr("value", contact['lastname']);
    $("#edit_contact_email").attr("value", contact['email']);
    $("#edit_contact_phone").attr("value", contact['phone']);
    $("#edit_contact_previous_photo").attr("value", contact['photo']);
    $("#edit_contact_position").attr("value", contact['position']);
}

function editForm(formInfo) {

    form = $(formInfo).data("values");

    // Form type: Link
    $("#edit_form_id_link").attr("value", form['id']);
    $("#edit_form_id_name_link").attr("value", form['link_id']);
    $("#edit_form_id_type_link").attr("value", form['link_type']);
    $("#edit_form_title_link").attr("value", form['link_name']);
    $("#edit_form_desc_link").val(form['link_desc']);
    $("#edit_form_content_link").attr("value", form['link_content']);

    // Form type: File
    $("#edit_form_id_file").attr("value", form['id']);
    $("#edit_form_id_name_file").attr("value", form['link_id']);
    $("#edit_form_id_file_file").attr("value", form['link_content']);
    $("#edit_form_id_type_file").attr("value", form['link_type']);
    $("#edit_form_title_file").attr("value", form['link_name']);
    $("#edit_form_desc_file").val(form['link_desc']);

}

function editPackage(packageInfo) {

    pack = $(packageInfo).data("values");

    // Package type: File
    $("#edit_package_id_file").attr("value", pack['id']);
    $("#edit_package_id_name_file").attr("value", pack['link_id']);
    $("#edit_package_id_type_file").attr("value", pack['link_type']);
    $("#edit_package_id_file_file").attr("value", pack['link_content']);
    $("#edit_package_title_file").attr("value", pack['link_name']);
    $("#edit_package_desc_file").val(pack['link_desc']);

}

function editMinutes(minutesInfo) {

    min = $(minutesInfo).data("values");

    // Minutes type: File
    $("#edit_minutes_id_file").attr("value", min['id']);
    $("#edit_minutes_id_name_file").attr("value", min['link_id']);
    $("#edit_minutes_id_type_file").attr("value", min['link_type']);
    $("#edit_minutes_id_file_file").attr("value", min['link_content']);
    $("#edit_minutes_title_file").attr("value", min['link_name']);
    $("#edit_minutes_desc_file").val(min['link_desc']);

}

function editPageFile(pageFileInfo){
    page = $(pageFileInfo).data("values");

    $("#edit_page_id_file").attr("value", page['id']);
    $("#edit_page_id_name_file").attr("value", page['link_id']);
    $("#edit_page_content_name_file").attr("value", page['link_content']);
    $("#edit_page_title_file").attr("value", page['link_name']);
    if(page['link_page'] === 'finance'){
        $("#edit_page_tag_file").selectpicker("val", page['link_tag']);
    }
}

function editBOEImage(boe){
    boe = $(boe).data("values");

    $("#edit_boe_image_id").attr("value", boe['id']);
    $("#edit_boe_image_name").attr("value", boe['web_desc']);
    
}

function editCarouselImage(carousel){
    carousel = $(carousel).data("values");

    $("#edit_carousel_image_id").attr("value", carousel['id']);
    $("#edit_carousel_image_name").attr("value", carousel['carousel_name']);
    $("#edit_carousel_caption").attr("value", carousel['carousel_desc']);
    
}

function editDirective(directiveInfo) {

    directive = $(directiveInfo).data("values");

    // Directive type: File
    $("#edit_directive_id_file").attr("value", directive['id']);
    $("#edit_directive_id_name_file").attr("value", directive['link_id']);
    $("#edit_directive_id_type_file").attr("value", directive['link_type']);
    $("#edit_directive_id_file_file").attr("value", directive['link_content']);
    $("#edit_directive_title_file").attr("value", directive['link_name']);
    $("#edit_directive_desc_file").val(directive['link_desc']);

}

function editPolicy(policyInfo) {

    policy = $(policyInfo).data("values");

    // Policy type: File
    $("#edit_policy_id_file").attr("value", policy['id']);
    $("#edit_policy_id_name_file").attr("value", policy['link_id']);
    $("#edit_policy_id_type_file").attr("value", policy['link_type']);
    $("#edit_policy_id_file_file").attr("value", policy['link_content']);
    $("#edit_policy_title_file").attr("value", policy['link_name']);
    $("#edit_policy_desc_file").val(policy['link_desc']);
    $("#edit_policy_tag_file").selectpicker("val", policy['link_tag']);

}

function editPlan(planInfo) {

    plan = $(planInfo).data("values");

    // Plan type: File
    $("#edit_plan_id_file").attr("value", plan['id']);
    $("#edit_plan_id_name_file").attr("value", plan['link_id']);
    $("#edit_plan_id_type_file").attr("value", plan['link_type']);
    $("#edit_plan_id_file_file").attr("value", plan['link_content']);
    $("#edit_plan_title_file").attr("value", plan['link_name']);
    $("#edit_plan_desc_file").val(plan['link_desc']);

}