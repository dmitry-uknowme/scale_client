namespace $ {
	export class $scale_dash extends $mol_list {
		
		/**
		 * ```tree
		 * api $scale_api
		 * ```
		 */
		@ $mol_mem
		api() {
			const obj = new this.$.$scale_api()
			
			return obj
		}
		
		/**
		 * ```tree
		 * rows /
		 * 	<= Top_row
		 * 	<= Bottom_row
		 * ```
		 */
		rows() {
			return [
				this.Top_row(),
				this.Bottom_row()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * open_enter_form?val null
		 * ```
		 */
		@ $mol_mem
		open_enter_form(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Enter_button $mol_button_major
		 * 	title \Создать запись на въезд
		 * 	click?val <=> open_enter_form?val
		 * ```
		 */
		@ $mol_mem
		Enter_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Создать запись на въезд"
			obj.click = (val?: any) => this.open_enter_form(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * open_exit_form?val null
		 * ```
		 */
		@ $mol_mem
		open_exit_form(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Exit_button $mol_button_major
		 * 	title \Создать запись на выезд
		 * 	click?val <=> open_exit_form?val
		 * ```
		 */
		@ $mol_mem
		Exit_button() {
			const obj = new this.$.$mol_button_major()
			
			obj.title = () => "Создать запись на выезд"
			obj.click = (val?: any) => this.open_exit_form(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control_form $mol_form
		 * 	form_fields /
		 * 	buttons /
		 * 		<= Enter_button
		 * 		<= Exit_button
		 * ```
		 */
		@ $mol_mem
		Control_form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
			] as readonly any[]
			obj.buttons = () => [
				this.Enter_button(),
				this.Exit_button()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control $mol_section
		 * 	title \Управление
		 * 	content / <= Control_form
		 * ```
		 */
		@ $mol_mem
		Control() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Управление"
			obj.content = () => [
				this.Control_form()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_1 $mol_image uri \camera1
		 * ```
		 */
		@ $mol_mem
		Camera_1() {
			const obj = new this.$.$mol_image()
			
			obj.uri = () => "camera1"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_2 $mol_image uri \camera2
		 * ```
		 */
		@ $mol_mem
		Camera_2() {
			const obj = new this.$.$mol_image()
			
			obj.uri = () => "camera2"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_row $mol_row sub /
		 * 	<= Camera_1
		 * 	<= Camera_2
		 * ```
		 */
		@ $mol_mem
		Camera_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Camera_1(),
				this.Camera_2()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_list $mol_section
		 * 	title \Камеры
		 * 	content / <= Camera_row
		 * ```
		 */
		@ $mol_mem
		Camera_list() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "Камеры"
			obj.content = () => [
				this.Camera_row()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row $mol_row sub /
		 * 	<= Control
		 * 	<= Camera_list
		 * ```
		 */
		@ $mol_mem
		Top_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Control(),
				this.Camera_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Number_labeler $mol_labeler title \Гос. номер
		 * ```
		 */
		@ $mol_mem
		Number_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Гос. номер"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Transporter_labeler $mol_labeler title \Перевозчик
		 * ```
		 */
		@ $mol_mem
		Transporter_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Перевозчик"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Weight_gross_labeler $mol_labeler title \Брутто (кг)
		 * ```
		 */
		@ $mol_mem
		Weight_gross_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Брутто (кг)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Type_weight_labeler $mol_labeler title \Вид груза
		 * ```
		 */
		@ $mol_mem
		Type_weight_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Вид груза"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Category_weight_labeler $mol_labeler title \Категория груза
		 * ```
		 */
		@ $mol_mem
		Category_weight_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Категория груза"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Date_enter_labeler $mol_labeler title \Дата и время въезда
		 * ```
		 */
		@ $mol_mem
		Date_enter_labeler() {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Дата и время въезда"
			
			return obj
		}
		
		/**
		 * ```tree
		 * row_content /
		 * 	<= Number_labeler
		 * 	<= Transporter_labeler
		 * 	<= Weight_gross_labeler
		 * 	<= Type_weight_labeler
		 * 	<= Category_weight_labeler
		 * 	<= Date_enter_labeler
		 * ```
		 */
		row_content() {
			return [
				this.Number_labeler(),
				this.Transporter_labeler(),
				this.Weight_gross_labeler(),
				this.Type_weight_labeler(),
				this.Category_weight_labeler(),
				this.Date_enter_labeler()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Table_header $mol_row
		 * 	minimal_height 100
		 * 	minimal_width 200
		 * 	sub <= row_content
		 * ```
		 */
		@ $mol_mem
		Table_header() {
			const obj = new this.$.$mol_row()
			
			obj.minimal_height = () => 100
			obj.minimal_width = () => 200
			obj.sub = () => this.row_content()
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_autoNumber*? \
		 * ```
		 */
		@ $mol_mem_key
		act_autoNumber(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Number_content* $mol_paragraph title <= act_autoNumber*?
		 * ```
		 */
		@ $mol_mem_key
		Number_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_autoNumber(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_transporter*? \
		 * ```
		 */
		@ $mol_mem_key
		act_transporter(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Transporter_content* $mol_paragraph title <= act_transporter*?
		 * ```
		 */
		@ $mol_mem_key
		Transporter_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_transporter(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_weightGross*? \
		 * ```
		 */
		@ $mol_mem_key
		act_weightGross(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Weight_gross_content* $mol_paragraph title <= act_weightGross*?
		 * ```
		 */
		@ $mol_mem_key
		Weight_gross_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_weightGross(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_cargoType*? \
		 * ```
		 */
		@ $mol_mem_key
		act_cargoType(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Cargo_type_content* $mol_paragraph title <= act_cargoType*?
		 * ```
		 */
		@ $mol_mem_key
		Cargo_type_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_cargoType(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_cargoCategory*? \
		 * ```
		 */
		@ $mol_mem_key
		act_cargoCategory(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Cargo_category_content* $mol_paragraph title <= act_cargoCategory*?
		 * ```
		 */
		@ $mol_mem_key
		Cargo_category_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_cargoCategory(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_enteredMoment*? \
		 * ```
		 */
		@ $mol_mem_key
		act_enteredMoment(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Date_enter_content* $mol_paragraph title <= act_enteredMoment*?
		 * ```
		 */
		@ $mol_mem_key
		Date_enter_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_enteredMoment(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_options_out \Создать запись на выезд для
		 * ```
		 */
		act_options_out() {
			return "Создать запись на выезд для"
		}
		
		/**
		 * ```tree
		 * Options_trigger_icon $mol_icon_menu
		 * ```
		 */
		@ $mol_mem
		Options_trigger_icon() {
			const obj = new this.$.$mol_icon_menu()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Menu_item_copy $mol_button_minor sub / <= act_options_out
		 * ```
		 */
		@ $mol_mem
		Menu_item_copy() {
			const obj = new this.$.$mol_button_minor()
			
			obj.sub = () => [
				this.act_options_out()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Options_content $mol_list rows / <= Menu_item_copy
		 * ```
		 */
		@ $mol_mem
		Options_content() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Menu_item_copy()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Act_options_pop $mol_pick
		 * 	hint <= act_options_out
		 * 	trigger_content / <= Options_trigger_icon
		 * 	bubble_content / <= Options_content
		 * ```
		 */
		@ $mol_mem
		Act_options_pop() {
			const obj = new this.$.$mol_pick()
			
			obj.hint = () => this.act_options_out()
			obj.trigger_content = () => [
				this.Options_trigger_icon()
			] as readonly any[]
			obj.bubble_content = () => [
				this.Options_content()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Act_row*0 $mol_row
		 * 	minimal_height 100
		 * 	minimal_width 200
		 * 	sub /
		 * 		<= Number_content*
		 * 		<= Transporter_content*
		 * 		<= Weight_gross_content*
		 * 		<= Cargo_type_content*
		 * 		<= Cargo_category_content*
		 * 		<= Date_enter_content*
		 * 		<= Act_options_pop
		 * ```
		 */
		@ $mol_mem_key
		Act_row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.minimal_height = () => 100
			obj.minimal_width = () => 200
			obj.sub = () => [
				this.Number_content(id),
				this.Transporter_content(id),
				this.Weight_gross_content(id),
				this.Cargo_type_content(id),
				this.Cargo_category_content(id),
				this.Date_enter_content(id),
				this.Act_options_pop()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_list / <= Act_row*0
		 * ```
		 */
		act_list() {
			return [
				this.Act_row("0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Act_list $mol_list rows <= act_list
		 * ```
		 */
		@ $mol_mem
		Act_list() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.act_list()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Auto_list $mol_section
		 * 	title \На территории
		 * 	content /
		 * 		<= Table_header
		 * 		<= Act_list
		 * ```
		 */
		@ $mol_mem
		Auto_list() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => "На территории"
			obj.content = () => [
				this.Table_header(),
				this.Act_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Bottom_row $mol_row sub / <= Auto_list
		 * ```
		 */
		@ $mol_mem
		Bottom_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Auto_list()
			] as readonly any[]
			
			return obj
		}
	}
	
}

