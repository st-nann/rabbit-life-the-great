export type Lists = {
	products: Product[];
	result: string;
	resultcode: string;
	resultdetail: string;
	taggroups: Taggroup[];
}
  
export type Taggroup = {
	group_slug: string;
	group_name_th: string;
	tag_group_order: number;
	ptag_group_id: number;
	tags: Tag2[];
}
  
export type Tag2 = {
	ptag_id: number;
	slug: string;
	tag_name_th: string;
	title_on_filter_th: string;
	display_on_filter: boolean;
	title_on_product_thumb_th: string;
	display_on_product_thumb: boolean;
	compare_mode: string;
	tag_order: number;
	ptag_group_id: number;
}
  
export type Product = {
	product_id: number;
	slug: string;
	product_name_en: string;
	product_name_th: string;
	html_header_description: string;
	html_body_title: string;
	html_body_description: string;
	benefit_1_header: string;
	benefit_1_type: string;
	benefit_1_body_html: string;
	benefit_2_header: string;
	benefit_2_type: string;
	benefit_2_body_html: string;
	benefit_3_header: string;
	benefit_3_type: string;
	benefit_3_body_html: string;
	html_condition: string;
	html_disclaimer: string;
	meta_description: string;
	html_benefit_text: string;
	attributes_fmt: string;
	calc_code: string;
	calc_type: string;
	call_to_action_button: string;
	call_to_action_section: string;
	download_brochure_button: string;
	image_name_large: string;
	image_name_small: string;
	image_name_share: string;
	download_file_name: string;
	url: string;
	meta_title: string;
	seo_kw: string;
	isonline: boolean;
	display_in_list: boolean;
	display_lead_form: boolean;
	online_sell_id: string;
	txtvalinsur_min: number;
	txtvalinsur_max: number;
	step: number;
	categories: Category[];
	tags: Tag[];
	product_related: Productrelated[];
	faqs: Faqs[] | null;
	subscription: Subscription;
}

export type Faqs = {
	product_id: number,
	faq_id: number,
	faq_question: string,
	faq_answer: string
}
  
export type Productrelated = {
	product_id: number;
	slug: string;
	product_name_en: string;
	product_name_th: string;
	html_header_description: string;
	html_body_title: string;
	html_body_description: string;
	benefit_1_header: string;
	benefit_1_type: string;
	benefit_1_body_html: string;
	benefit_2_header: string;
	benefit_2_type: string;
	benefit_2_body_html: string;
	benefit_3_header: string;
	benefit_3_type: string;
	benefit_3_body_html: string;
	html_condition: string;
	html_disclaimer: string;
	meta_description: string;
	html_benefit_text: string;
	attributes_fmt: string;
	calc_code: string;
	calc_type: string;
	call_to_action_button: string;
	call_to_action_section: string;
	download_brochure_button: string;
	image_name_large: string;
	image_name_small: string;
	image_name_share: string;
	download_file_name: string;
	url: string;
	meta_title: string;
	seo_kw: string;
	isonline: boolean;
	display_in_list: boolean;
	display_lead_form: boolean;
	online_sell_id: string;
	txtvalinsur_min: number;
	txtvalinsur_max: number;
	step: number;
	categories: Category[];
	tags: Tag[];
	product_related: null;
	faqs: Faqs[] | null;
	subscription: Subscription;
}
  
export type Subscription = {
	sms_code_prefix: string;
	sms_msg_template: string;
	call_to_action: string;
	thankyou_title: string;
	thankyou_msg: string;
	email_field: boolean;
	register_button: string;
	display_as_condition: boolean;
}
  
export type Tag = {
	ptag_id: number;
	product_id: number;
	slug: string;
	tag_name_th: string;
	title_on_filter_th: string;
	display_on_filter: boolean;
	title_on_product_thumb_th: string;
	display_on_product_thumb: boolean;
	compare_mode: string;
	tag_order: number;
	ptag_group_id: number;
	group_slug: string;
	group_name_th: string;
	tag_group_order: number;
}
  
export type Category = {
	product_id: number;
	pcate_id: number;
	pcategory_name: string;
	pcategory_short_name: string;
	slug: string;
	icon_type: string;
	color: string;
	color_bg: string;
	color_gradient: string;
}