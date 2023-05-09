namespace $ {
	export class $scale_dash_table_pick extends $mol_pick {
		
		/**
		 * ```tree
		 * align \bottom_right
		 * ```
		 */
		align() {
			return "bottom_right"
		}
		
		/**
		 * ```tree
		 * hint <= act_options_out
		 * ```
		 */
		hint() {
			return this.act_options_out()
		}
		
		/**
		 * ```tree
		 * trigger_content / <= Options_trigger_icon
		 * ```
		 */
		trigger_content() {
			return [
				this.Options_trigger_icon()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * bubble_content* / <= Options_content*
		 * ```
		 */
		bubble_content(id: any) {
			return [
				this.Options_content(id)
			] as readonly any[]
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
		 * open_exit_form_current*? null
		 * ```
		 */
		@ $mol_mem_key
		open_exit_form_current(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * act_exit_text \Создать запись на выезд для
		 * ```
		 */
		act_exit_text() {
			return "Создать запись на выезд для"
		}
		
		/**
		 * ```tree
		 * Menu_item_copy* $mol_button_minor
		 * 	click? <=> open_exit_form_current*?
		 * 	sub / <= act_exit_text
		 * ```
		 */
		@ $mol_mem_key
		Menu_item_copy(id: any) {
			const obj = new this.$.$mol_button_minor()
			
			obj.click = (next?: any) => this.open_exit_form_current(id, next)
			obj.sub = () => [
				this.act_exit_text()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Options_content* $mol_list rows / <= Menu_item_copy*
		 * ```
		 */
		@ $mol_mem_key
		Options_content(id: any) {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Menu_item_copy(id)
			] as readonly any[]
			
			return obj
		}
	}
	
	export class $scale_dash extends $mol_list {
		
		/**
		 * ```tree
		 * open_entry_gate
		 * ```
		 */
		open_entry_gate() {
			return this.api().gateOpenEntry()
		}
		
		/**
		 * ```tree
		 * close_entry_gate
		 * ```
		 */
		close_entry_gate() {
			return this.api().gateCloseEntry()
		}
		
		/**
		 * ```tree
		 * open_exit_gate
		 * ```
		 */
		open_exit_gate() {
			return this.api().gateOpenExit()
		}
		
		/**
		 * ```tree
		 * close_exit_gate
		 * ```
		 */
		close_exit_gate() {
			return this.api().gateCloseExit()
		}
		
		/**
		 * ```tree
		 * api $scale_api
		 * 	gateOpenEntry => open_entry_gate
		 * 	gateCloseEntry => close_entry_gate
		 * 	gateOpenExit => open_exit_gate
		 * 	gateCloseExit => close_exit_gate
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
		 * pin_controls?val null
		 * ```
		 */
		@ $mol_mem
		pin_controls(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Top_row_pin_icon $mol_icon_pin_outline
		 * ```
		 */
		@ $mol_mem
		Top_row_pin_icon() {
			const obj = new this.$.$mol_icon_pin_outline()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row__pin $mol_button_minor
		 * 	click?val <=> pin_controls?val
		 * 	sub / <= Top_row_pin_icon
		 * ```
		 */
		@ $mol_mem
		Top_row__pin() {
			const obj = new this.$.$mol_button_minor()
			
			obj.click = (val?: any) => this.pin_controls(val)
			obj.sub = () => [
				this.Top_row_pin_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * expand_controls?val null
		 * ```
		 */
		@ $mol_mem
		expand_controls(val?: any) {
			if ( val !== undefined ) return val as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Top_row_expand_icon $mol_icon_arrow_expand
		 * ```
		 */
		@ $mol_mem
		Top_row_expand_icon() {
			const obj = new this.$.$mol_icon_arrow_expand()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row_expand $mol_button_minor
		 * 	click?val <=> expand_controls?val
		 * 	sub / <= Top_row_expand_icon
		 * ```
		 */
		@ $mol_mem
		Top_row_expand() {
			const obj = new this.$.$mol_button_minor()
			
			obj.click = (val?: any) => this.expand_controls(val)
			obj.sub = () => [
				this.Top_row_expand_icon()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row_tools $mol_view sub /
		 * 	<= Top_row__pin
		 * 	<= Top_row_expand
		 * ```
		 */
		@ $mol_mem
		Top_row_tools() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Top_row__pin(),
				this.Top_row_expand()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Gate_entry $scale_dash_gate
		 * 	title \Шлагбаум №1
		 * 	open_submit <= open_entry_gate
		 * 	close_submit <= close_entry_gate
		 * ```
		 */
		@ $mol_mem
		Gate_entry() {
			const obj = new this.$.$scale_dash_gate()
			
			obj.title = () => "Шлагбаум №1"
			obj.open_submit = () => this.open_entry_gate()
			obj.close_submit = () => this.close_entry_gate()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Gate_exit $scale_dash_gate
		 * 	title \Шлагбаум №2
		 * 	open_submit <= open_entry_gate
		 * 	close_submit <= close_entry_gate
		 * ```
		 */
		@ $mol_mem
		Gate_exit() {
			const obj = new this.$.$scale_dash_gate()
			
			obj.title = () => "Шлагбаум №2"
			obj.open_submit = () => this.open_entry_gate()
			obj.close_submit = () => this.close_entry_gate()
			
			return obj
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
		 * Btn_row $mol_row sub /
		 * 	<= Enter_button
		 * 	<= Exit_button
		 * ```
		 */
		@ $mol_mem
		Btn_row() {
			const obj = new this.$.$mol_row()
			
			obj.sub = () => [
				this.Enter_button(),
				this.Exit_button()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Control_form $mol_form
		 * 	form_fields /
		 * 	buttons /
		 * 		<= Gate_entry
		 * 		<= Gate_exit
		 * 		<= Btn_row
		 * ```
		 */
		@ $mol_mem
		Control_form() {
			const obj = new this.$.$mol_form()
			
			obj.form_fields = () => [
			] as readonly any[]
			obj.buttons = () => [
				this.Gate_entry(),
				this.Gate_exit(),
				this.Btn_row()
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
		 * uri \
		 * ```
		 */
		uri() {
			return ""
		}
		
		/**
		 * ```tree
		 * Camera_1 $scale_dash_camera uri <= uri
		 * ```
		 */
		@ $mol_mem
		Camera_1() {
			const obj = new this.$.$scale_dash_camera()
			
			obj.uri = () => this.uri()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Camera_2 $mol_video_player uri <= uri
		 * ```
		 */
		@ $mol_mem
		Camera_2() {
			const obj = new this.$.$mol_video_player()
			
			obj.uri = () => this.uri()
			
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
		 * Top_row_body $mol_view sub /
		 * 	<= Control
		 * 	<= Camera_list
		 * ```
		 */
		@ $mol_mem
		Top_row_body() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Control(),
				this.Camera_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Top_row $mol_list rows /
		 * 	<= Top_row_tools
		 * 	<= Top_row_body
		 * ```
		 */
		@ $mol_mem
		Top_row() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => [
				this.Top_row_tools(),
				this.Top_row_body()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_table_title \На территории
		 * ```
		 */
		act_table_title() {
			return "На территории"
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
		 * Number_labeler* $mol_labeler
		 * 	title \Гос. номер
		 * 	Content <= Number_content*
		 * ```
		 */
		@ $mol_mem_key
		Number_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Гос. номер"
			obj.Content = () => this.Number_content(id)
			
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
		 * Transporter_labeler* $mol_labeler
		 * 	title \Перевозчик
		 * 	Content <= Transporter_content*
		 * ```
		 */
		@ $mol_mem_key
		Transporter_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Перевозчик"
			obj.Content = () => this.Transporter_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * act_payer*? \
		 * ```
		 */
		@ $mol_mem_key
		act_payer(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return ""
		}
		
		/**
		 * ```tree
		 * Payer_content* $mol_paragraph title <= act_payer*?
		 * ```
		 */
		@ $mol_mem_key
		Payer_content(id: any) {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.act_payer(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Payer_labeler* $mol_labeler
		 * 	title \Оператор
		 * 	Content <= Payer_content*
		 * ```
		 */
		@ $mol_mem_key
		Payer_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Оператор"
			obj.Content = () => this.Payer_content(id)
			
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
		 * Weight_gross_labeler* $mol_labeler
		 * 	title \Брутто (кг)
		 * 	Content <= Weight_gross_content*
		 * ```
		 */
		@ $mol_mem_key
		Weight_gross_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Брутто (кг)"
			obj.Content = () => this.Weight_gross_content(id)
			
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
		 * Cargo_type_labeler* $mol_labeler
		 * 	title \Вид груза
		 * 	Content <= Cargo_type_content*
		 * ```
		 */
		@ $mol_mem_key
		Cargo_type_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Вид груза"
			obj.Content = () => this.Cargo_type_content(id)
			
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
		 * Cargo_category_labeler* $mol_labeler
		 * 	title \Категория груза
		 * 	Content <= Cargo_category_content*
		 * ```
		 */
		@ $mol_mem_key
		Cargo_category_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Категория груза"
			obj.Content = () => this.Cargo_category_content(id)
			
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
		 * Date_enter_labeler* $mol_labeler
		 * 	title \Дата и время въезда
		 * 	Content <= Date_enter_content*
		 * ```
		 */
		@ $mol_mem_key
		Date_enter_labeler(id: any) {
			const obj = new this.$.$mol_labeler()
			
			obj.title = () => "Дата и время въезда"
			obj.Content = () => this.Date_enter_content(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * open_exit_form_current*? null
		 * ```
		 */
		@ $mol_mem_key
		open_exit_form_current(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * act_exit_text*? null
		 * ```
		 */
		@ $mol_mem_key
		act_exit_text(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * Act_options_pop* $scale_dash_table_pick
		 * 	open_exit_form_current? <=> open_exit_form_current*?
		 * 	act_exit_text? <= act_exit_text*?
		 * ```
		 */
		@ $mol_mem_key
		Act_options_pop(id: any) {
			const obj = new this.$.$scale_dash_table_pick()
			
			obj.open_exit_form_current = (next?: any) => this.open_exit_form_current(id, next)
			obj.act_exit_text = (next?: any) => this.act_exit_text(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Act_row*0 $mol_row
		 * 	minimal_height 100
		 * 	minimal_width 200
		 * 	sub /
		 * 		<= Number_labeler*
		 * 		<= Transporter_labeler*
		 * 		<= Payer_labeler*
		 * 		<= Weight_gross_labeler*
		 * 		<= Cargo_type_labeler*
		 * 		<= Cargo_category_labeler*
		 * 		<= Date_enter_labeler*
		 * 		<= Act_options_pop*
		 * ```
		 */
		@ $mol_mem_key
		Act_row(id: any) {
			const obj = new this.$.$mol_row()
			
			obj.minimal_height = () => 100
			obj.minimal_width = () => 200
			obj.sub = () => [
				this.Number_labeler(id),
				this.Transporter_labeler(id),
				this.Payer_labeler(id),
				this.Weight_gross_labeler(id),
				this.Cargo_type_labeler(id),
				this.Cargo_category_labeler(id),
				this.Date_enter_labeler(id),
				this.Act_options_pop(id)
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
		 * 	title <= act_table_title
		 * 	content / <= Act_list
		 * ```
		 */
		@ $mol_mem
		Auto_list() {
			const obj = new this.$.$mol_section()
			
			obj.title = () => this.act_table_title()
			obj.content = () => [
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

