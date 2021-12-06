// Продолжи писать условие переходов, если есть значение в localStorge  
// В каждом упражнении добавить добавление значения в localStorge
// В конце тренировки все переданные значения удалить так: localStorage.removeItem("razminka_4"); localStorage.removeItem("razminka_3"); и так далее.
$(document).ready(function() {

	// 15 упражение 
	if (localStorage.getItem('upragnenie_15_stat_3') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_stat_3.html";
	} else if (localStorage.getItem('upragnenie_15_stat_2') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_stat_2.html";
	} else if (localStorage.getItem('upragnenie_15_stat_1') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_stat_1.html";
	} else if (localStorage.getItem('upragnenie_15_timer_4') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_end.html";
	} else if (localStorage.getItem('upragnenie_15_4_work') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_4_form.html";
	} else if (localStorage.getItem('upragnenie_15_4') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_4.html";
	} else if (localStorage.getItem('upragnenie_15_timer_3') === 'Yes' && podxod_4_15u != "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_4.html";
	} else if (localStorage.getItem('upragnenie_15_timer_3') === 'Yes' && podxod_4_15u == "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_end.html";
	} else if (localStorage.getItem('upragnenie_15_3_work') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_3_form.html";
	} else if (localStorage.getItem('upragnenie_15_3') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_3.html";
	} else if (localStorage.getItem('upragnenie_15_timer_2') === 'Yes' && podxod_3_15u != "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_3.html";
	} else if (localStorage.getItem('upragnenie_15_timer_2') === 'Yes' && podxod_3_15u == "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_end.html";
	} else if (localStorage.getItem('upragnenie_15_2_work') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_2_form.html";
	} else if (localStorage.getItem('upragnenie_15_2') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_2.html";
	} else if (localStorage.getItem('upragnenie_15_timer_1') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_2.html";
	} else if (localStorage.getItem('upragnenie_15_1_work') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_1_form.html";
	} else if (localStorage.getItem('upragnenie_15_1') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_1.html";
	} else if (localStorage.getItem('upragnenie_15_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_1.html";
	} else if (localStorage.getItem('upragnenie_15_razminka_2') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_15_razminka_timer') === 'Yes' && upragnenie_15_razminka_2 == "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_1.html";
	} else if (localStorage.getItem('upragnenie_15_razminka_timer') === 'Yes' && upragnenie_15_razminka_2 != "Нет") {
		location.href = "../upragnenie_15/upragnenie_15_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_15_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_15_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_15/upragnenie_15_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_15_razminka') === 'Yes') {
		location.href = "../upragnenie_15/upragnenie_15_razminka.html";
	} //конец 15 упражнения 
	// 14 упражение 
	else if (localStorage.getItem('upragnenie_14_stat_3') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_stat_3.html";
	} else if (localStorage.getItem('upragnenie_14_stat_2') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_stat_2.html";
	} else if (localStorage.getItem('upragnenie_14_stat_1') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_stat_1.html";
	} else if (localStorage.getItem('upragnenie_14_timer_4') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_end.html";
	} else if (localStorage.getItem('upragnenie_14_4_work') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_4_form.html";
	} else if (localStorage.getItem('upragnenie_14_4') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_4.html";
	} else if (localStorage.getItem('upragnenie_14_timer_3') === 'Yes' && podxod_4_14u != "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_4.html";
	} else if (localStorage.getItem('upragnenie_14_timer_3') === 'Yes' && podxod_4_14u == "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_end.html";
	} else if (localStorage.getItem('upragnenie_14_3_work') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_3_form.html";
	} else if (localStorage.getItem('upragnenie_14_3') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_3.html";
	} else if (localStorage.getItem('upragnenie_14_timer_2') === 'Yes' && podxod_3_14u != "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_3.html";
	} else if (localStorage.getItem('upragnenie_14_timer_2') === 'Yes' && podxod_3_14u == "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_end.html";
	} else if (localStorage.getItem('upragnenie_14_2_work') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_2_form.html";
	} else if (localStorage.getItem('upragnenie_14_2') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_2.html";
	} else if (localStorage.getItem('upragnenie_14_timer_1') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_2.html";
	} else if (localStorage.getItem('upragnenie_14_1_work') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_1_form.html";
	} else if (localStorage.getItem('upragnenie_14_1') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_1.html";
	} else if (localStorage.getItem('upragnenie_14_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_1.html";
	} else if (localStorage.getItem('upragnenie_14_razminka_2') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_14_razminka_timer') === 'Yes' && upragnenie_14_razminka_2 == "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_1.html";
	} else if (localStorage.getItem('upragnenie_14_razminka_timer') === 'Yes' && upragnenie_14_razminka_2 != "Нет") {
		location.href = "../upragnenie_14/upragnenie_14_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_14_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_14_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_14/upragnenie_14_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_14_razminka') === 'Yes') {
		location.href = "../upragnenie_14/upragnenie_14_razminka.html";
	} //конец 14 упражнения 
	// 13 упражение 
	else if (localStorage.getItem('upragnenie_13_stat_3') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_stat_3.html";
	} else if (localStorage.getItem('upragnenie_13_stat_2') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_stat_2.html";
	} else if (localStorage.getItem('upragnenie_13_stat_1') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_stat_1.html";
	} else if (localStorage.getItem('upragnenie_13_timer_4') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_end.html";
	} else if (localStorage.getItem('upragnenie_13_4_work') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_4_form.html";
	} else if (localStorage.getItem('upragnenie_13_4') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_4.html";
	} else if (localStorage.getItem('upragnenie_13_timer_3') === 'Yes' && podxod_4_13u != "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_4.html";
	} else if (localStorage.getItem('upragnenie_13_timer_3') === 'Yes' && podxod_4_13u == "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_end.html";
	} else if (localStorage.getItem('upragnenie_13_3_work') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_3_form.html";
	} else if (localStorage.getItem('upragnenie_13_3') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_3.html";
	} else if (localStorage.getItem('upragnenie_13_timer_2') === 'Yes' && podxod_3_13u != "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_3.html";
	} else if (localStorage.getItem('upragnenie_13_timer_2') === 'Yes' && podxod_3_13u == "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_end.html";
	} else if (localStorage.getItem('upragnenie_13_2_work') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_2_form.html";
	} else if (localStorage.getItem('upragnenie_13_2') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_2.html";
	} else if (localStorage.getItem('upragnenie_13_timer_1') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_2.html";
	} else if (localStorage.getItem('upragnenie_13_1_work') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_1_form.html";
	} else if (localStorage.getItem('upragnenie_13_1') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_1.html";
	} else if (localStorage.getItem('upragnenie_13_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_1.html";
	} else if (localStorage.getItem('upragnenie_13_razminka_2') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_13_razminka_timer') === 'Yes' && upragnenie_13_razminka_2 == "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_1.html";
	} else if (localStorage.getItem('upragnenie_13_razminka_timer') === 'Yes' && upragnenie_13_razminka_2 != "Нет") {
		location.href = "../upragnenie_13/upragnenie_13_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_13_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_13_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_13/upragnenie_13_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_13_razminka') === 'Yes') {
		location.href = "../upragnenie_13/upragnenie_13_razminka.html";
	} //конец 13 упражнения 
	// 12 упражение 
	else if (localStorage.getItem('upragnenie_12_stat_3') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_stat_3.html";
	} else if (localStorage.getItem('upragnenie_12_stat_2') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_stat_2.html";
	} else if (localStorage.getItem('upragnenie_12_stat_1') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_stat_1.html";
	} else if (localStorage.getItem('upragnenie_12_timer_4') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_end.html";
	} else if (localStorage.getItem('upragnenie_12_4_work') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_4_form.html";
	} else if (localStorage.getItem('upragnenie_12_4') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_4.html";
	} else if (localStorage.getItem('upragnenie_12_timer_3') === 'Yes' && podxod_4_12u != "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_4.html";
	} else if (localStorage.getItem('upragnenie_12_timer_3') === 'Yes' && podxod_4_12u == "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_end.html";
	} else if (localStorage.getItem('upragnenie_12_3_work') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_3_form.html";
	} else if (localStorage.getItem('upragnenie_12_3') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_3.html";
	} else if (localStorage.getItem('upragnenie_12_timer_2') === 'Yes' && podxod_3_12u != "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_3.html";
	} else if (localStorage.getItem('upragnenie_12_timer_2') === 'Yes' && podxod_3_12u == "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_end.html";
	} else if (localStorage.getItem('upragnenie_12_2_work') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_2_form.html";
	} else if (localStorage.getItem('upragnenie_12_2') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_2.html";
	} else if (localStorage.getItem('upragnenie_12_timer_1') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_2.html";
	} else if (localStorage.getItem('upragnenie_12_1_work') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_1_form.html";
	} else if (localStorage.getItem('upragnenie_12_1') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_1.html";
	} else if (localStorage.getItem('upragnenie_12_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_1.html";
	} else if (localStorage.getItem('upragnenie_12_razminka_2') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_12_razminka_timer') === 'Yes' && upragnenie_12_razminka_2 == "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_1.html";
	} else if (localStorage.getItem('upragnenie_12_razminka_timer') === 'Yes' && upragnenie_12_razminka_2 != "Нет") {
		location.href = "../upragnenie_12/upragnenie_12_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_12_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_12_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_12/upragnenie_12_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_12_razminka') === 'Yes') {
		location.href = "../upragnenie_12/upragnenie_12_razminka.html";
	} //конец 12 упражнения 
	// 11 упражение 
	else if (localStorage.getItem('upragnenie_11_stat_3') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_stat_3.html";
	} else if (localStorage.getItem('upragnenie_11_stat_2') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_stat_2.html";
	} else if (localStorage.getItem('upragnenie_11_stat_1') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_stat_1.html";
	} else if (localStorage.getItem('upragnenie_11_timer_4') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_end.html";
	} else if (localStorage.getItem('upragnenie_11_4_work') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_4_form.html";
	} else if (localStorage.getItem('upragnenie_11_4') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_4.html";
	} else if (localStorage.getItem('upragnenie_11_timer_3') === 'Yes' && podxod_4_11u != "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_4.html";
	} else if (localStorage.getItem('upragnenie_11_timer_3') === 'Yes' && podxod_4_11u == "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_end.html";
	} else if (localStorage.getItem('upragnenie_11_3_work') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_3_form.html";
	} else if (localStorage.getItem('upragnenie_11_3') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_3.html";
	} else if (localStorage.getItem('upragnenie_11_timer_2') === 'Yes' && podxod_3_11u != "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_3.html";
	} else if (localStorage.getItem('upragnenie_11_timer_2') === 'Yes' && podxod_3_11u == "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_end.html";
	} else if (localStorage.getItem('upragnenie_11_2_work') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_2_form.html";
	} else if (localStorage.getItem('upragnenie_11_2') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_2.html";
	} else if (localStorage.getItem('upragnenie_11_timer_1') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_2.html";
	} else if (localStorage.getItem('upragnenie_11_1_work') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_1_form.html";
	} else if (localStorage.getItem('upragnenie_11_1') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_1.html";
	} else if (localStorage.getItem('upragnenie_11_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_1.html";
	} else if (localStorage.getItem('upragnenie_11_razminka_2') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_11_razminka_timer') === 'Yes' && upragnenie_11_razminka_2 == "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_1.html";
	} else if (localStorage.getItem('upragnenie_11_razminka_timer') === 'Yes' && upragnenie_11_razminka_2 != "Нет") {
		location.href = "../upragnenie_11/upragnenie_11_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_11_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_11_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_11/upragnenie_11_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_11_razminka') === 'Yes') {
		location.href = "../upragnenie_11/upragnenie_11_razminka.html";
	} //конец 11 упражнения 
	// 10 упражение 
	else if (localStorage.getItem('upragnenie_10_stat_3') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_stat_3.html";
	} else if (localStorage.getItem('upragnenie_10_stat_2') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_stat_2.html";
	} else if (localStorage.getItem('upragnenie_10_stat_1') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_stat_1.html";
	} else if (localStorage.getItem('upragnenie_10_timer_4') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_end.html";
	} else if (localStorage.getItem('upragnenie_10_4_work') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_4_form.html";
	} else if (localStorage.getItem('upragnenie_10_4') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_4.html";
	} else if (localStorage.getItem('upragnenie_10_timer_3') === 'Yes' && podxod_4_10u != "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_4.html";
	} else if (localStorage.getItem('upragnenie_10_timer_3') === 'Yes' && podxod_4_10u == "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_end.html";
	} else if (localStorage.getItem('upragnenie_10_3_work') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_3_form.html";
	} else if (localStorage.getItem('upragnenie_10_3') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_3.html";
	} else if (localStorage.getItem('upragnenie_10_timer_2') === 'Yes' && podxod_3_10u != "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_3.html";
	} else if (localStorage.getItem('upragnenie_10_timer_2') === 'Yes' && podxod_3_10u == "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_end.html";
	} else if (localStorage.getItem('upragnenie_10_2_work') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_2_form.html";
	} else if (localStorage.getItem('upragnenie_10_2') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_2.html";
	} else if (localStorage.getItem('upragnenie_10_timer_1') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_2.html";
	} else if (localStorage.getItem('upragnenie_10_1_work') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_1_form.html";
	} else if (localStorage.getItem('upragnenie_10_1') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_1.html";
	} else if (localStorage.getItem('upragnenie_10_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_1.html";
	} else if (localStorage.getItem('upragnenie_10_razminka_2') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_10_razminka_timer') === 'Yes' && upragnenie_10_razminka_2 == "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_1.html";
	} else if (localStorage.getItem('upragnenie_10_razminka_timer') === 'Yes' && upragnenie_10_razminka_2 != "Нет") {
		location.href = "../upragnenie_10/upragnenie_10_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_10_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_10_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_10/upragnenie_10_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_10_razminka') === 'Yes') {
		location.href = "../upragnenie_10/upragnenie_10_razminka.html";
	} //конец 10 упражнения 
	// 9 упражение 
	else if (localStorage.getItem('upragnenie_9_stat_3') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_stat_3.html";
	} else if (localStorage.getItem('upragnenie_9_stat_2') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_stat_2.html";
	} else if (localStorage.getItem('upragnenie_9_stat_1') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_stat_1.html";
	} else if (localStorage.getItem('upragnenie_9_timer_4') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_end.html";
	} else if (localStorage.getItem('upragnenie_9_4_work') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_4_form.html";
	} else if (localStorage.getItem('upragnenie_9_4') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_4.html";
	} else if (localStorage.getItem('upragnenie_9_timer_3') === 'Yes' && podxod_4_9u != "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_4.html";
	} else if (localStorage.getItem('upragnenie_9_timer_3') === 'Yes' && podxod_4_9u == "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_end.html";
	} else if (localStorage.getItem('upragnenie_9_3_work') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_3_form.html";
	} else if (localStorage.getItem('upragnenie_9_3') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_3.html";
	} else if (localStorage.getItem('upragnenie_9_timer_2') === 'Yes' && podxod_3_9u != "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_3.html";
	} else if (localStorage.getItem('upragnenie_9_timer_2') === 'Yes' && podxod_3_9u == "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_end.html";
	} else if (localStorage.getItem('upragnenie_9_2_work') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_2_form.html";
	} else if (localStorage.getItem('upragnenie_9_2') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_2.html";
	} else if (localStorage.getItem('upragnenie_9_timer_1') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_2.html";
	} else if (localStorage.getItem('upragnenie_9_1_work') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_1_form.html";
	} else if (localStorage.getItem('upragnenie_9_1') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_1.html";
	} else if (localStorage.getItem('upragnenie_9_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_1.html";
	} else if (localStorage.getItem('upragnenie_9_razminka_2') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_9_razminka_timer') === 'Yes' && upragnenie_9_razminka_2 == "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_1.html";
	} else if (localStorage.getItem('upragnenie_9_razminka_timer') === 'Yes' && upragnenie_9_razminka_2 != "Нет") {
		location.href = "../upragnenie_9/upragnenie_9_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_9_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_9_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_9/upragnenie_9_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_9_razminka') === 'Yes') {
		location.href = "../upragnenie_9/upragnenie_9_razminka.html";
	} //конец 9 упражнения  
	// 8 упражение 
	else if (localStorage.getItem('upragnenie_8_stat_3') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_stat_3.html";
	} else if (localStorage.getItem('upragnenie_8_stat_2') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_stat_2.html";
	} else if (localStorage.getItem('upragnenie_8_stat_1') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_stat_1.html";
	} else if (localStorage.getItem('upragnenie_8_timer_4') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_end.html";
	} else if (localStorage.getItem('upragnenie_8_4_work') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_4_form.html";
	} else if (localStorage.getItem('upragnenie_8_4') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_4.html";
	} else if (localStorage.getItem('upragnenie_8_timer_3') === 'Yes' && podxod_4_8u != "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_4.html";
	} else if (localStorage.getItem('upragnenie_8_timer_3') === 'Yes' && podxod_4_8u == "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_end.html";
	} else if (localStorage.getItem('upragnenie_8_3_work') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_3_form.html";
	} else if (localStorage.getItem('upragnenie_8_3') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_3.html";
	} else if (localStorage.getItem('upragnenie_8_timer_2') === 'Yes' && podxod_3_8u != "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_3.html";
	} else if (localStorage.getItem('upragnenie_8_timer_2') === 'Yes' && podxod_3_8u == "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_end.html";
	} else if (localStorage.getItem('upragnenie_8_2_work') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_2_form.html";
	} else if (localStorage.getItem('upragnenie_8_2') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_2.html";
	} else if (localStorage.getItem('upragnenie_8_timer_1') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_2.html";
	} else if (localStorage.getItem('upragnenie_8_1_work') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_1_form.html";
	} else if (localStorage.getItem('upragnenie_8_1') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_1.html";
	} else if (localStorage.getItem('upragnenie_8_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_1.html";
	} else if (localStorage.getItem('upragnenie_8_razminka_2') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_8_razminka_timer') === 'Yes' && upragnenie_8_razminka_2 == "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_1.html";
	} else if (localStorage.getItem('upragnenie_8_razminka_timer') === 'Yes' && upragnenie_8_razminka_2 != "Нет") {
		location.href = "../upragnenie_8/upragnenie_8_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_8_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_8_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_8/upragnenie_8_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_8_razminka') === 'Yes') {
		location.href = "../upragnenie_8/upragnenie_8_razminka.html";
	} //конец 8 упражнения 
	// 7 упражение 
	else if (localStorage.getItem('upragnenie_7_stat_3') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_stat_3.html";
	} else if (localStorage.getItem('upragnenie_7_stat_2') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_stat_2.html";
	} else if (localStorage.getItem('upragnenie_7_stat_1') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_stat_1.html";
	} else if (localStorage.getItem('upragnenie_7_timer_4') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_end.html";
	} else if (localStorage.getItem('upragnenie_7_4_work') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_4_form.html";
	} else if (localStorage.getItem('upragnenie_7_4') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_4.html";
	} else if (localStorage.getItem('upragnenie_7_timer_3') === 'Yes' && podxod_4_7u != "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_4.html";
	} else if (localStorage.getItem('upragnenie_7_timer_3') === 'Yes' && podxod_4_7u == "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_end.html";
	} else if (localStorage.getItem('upragnenie_7_3_work') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_3_form.html";
	} else if (localStorage.getItem('upragnenie_7_3') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_3.html";
	} else if (localStorage.getItem('upragnenie_7_timer_2') === 'Yes' && podxod_3_7u != "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_3.html";
	} else if (localStorage.getItem('upragnenie_7_timer_2') === 'Yes' && podxod_3_7u == "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_end.html";
	} else if (localStorage.getItem('upragnenie_7_2_work') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_2_form.html";
	} else if (localStorage.getItem('upragnenie_7_2') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_2.html";
	} else if (localStorage.getItem('upragnenie_7_timer_1') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_2.html";
	} else if (localStorage.getItem('upragnenie_7_1_work') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_1_form.html";
	} else if (localStorage.getItem('upragnenie_7_1') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_1.html";
	} else if (localStorage.getItem('upragnenie_7_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_1.html";
	} else if (localStorage.getItem('upragnenie_7_razminka_2') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_7_razminka_timer') === 'Yes' && upragnenie_7_razminka_2 == "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_1.html";
	} else if (localStorage.getItem('upragnenie_7_razminka_timer') === 'Yes' && upragnenie_7_razminka_2 != "Нет") {
		location.href = "../upragnenie_7/upragnenie_7_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_7_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_7_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_7/upragnenie_7_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_7_razminka') === 'Yes') {
		location.href = "../upragnenie_7/upragnenie_7_razminka.html";
	} //конец 7 упражнения 
	// 6 упражение 
	else if (localStorage.getItem('upragnenie_6_stat_3') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_stat_3.html";
	} else if (localStorage.getItem('upragnenie_6_stat_2') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_stat_2.html";
	} else if (localStorage.getItem('upragnenie_6_stat_1') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_stat_1.html";
	} else if (localStorage.getItem('upragnenie_6_timer_4') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_end.html";
	} else if (localStorage.getItem('upragnenie_6_4_work') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_4_form.html";
	} else if (localStorage.getItem('upragnenie_6_4') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_4.html";
	} else if (localStorage.getItem('upragnenie_6_timer_3') === 'Yes' && podxod_4_6u != "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_4.html";
	} else if (localStorage.getItem('upragnenie_6_timer_3') === 'Yes' && podxod_4_6u == "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_end.html";
	} else if (localStorage.getItem('upragnenie_6_3_work') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_3_form.html";
	} else if (localStorage.getItem('upragnenie_6_3') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_3.html";
	} else if (localStorage.getItem('upragnenie_6_timer_2') === 'Yes' && podxod_3_6u != "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_3.html";
	} else if (localStorage.getItem('upragnenie_6_timer_2') === 'Yes' && podxod_3_6u == "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_end.html";
	} else if (localStorage.getItem('upragnenie_6_2_work') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_2_form.html";
	} else if (localStorage.getItem('upragnenie_6_2') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_2.html";
	} else if (localStorage.getItem('upragnenie_6_timer_1') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_2.html";
	} else if (localStorage.getItem('upragnenie_6_1_work') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_1_form.html";
	} else if (localStorage.getItem('upragnenie_6_1') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_1.html";
	} else if (localStorage.getItem('upragnenie_6_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_1.html";
	} else if (localStorage.getItem('upragnenie_6_razminka_2') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_6_razminka_timer') === 'Yes' && upragnenie_6_razminka_2 == "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_1.html";
	} else if (localStorage.getItem('upragnenie_6_razminka_timer') === 'Yes' && upragnenie_6_razminka_2 != "Нет") {
		location.href = "../upragnenie_6/upragnenie_6_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_6_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_6_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_6/upragnenie_6_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_6_razminka') === 'Yes') {
		location.href = "../upragnenie_6/upragnenie_6_razminka.html";
	} //конец 6 упражнения 
	// 5 упражение 
	else if (localStorage.getItem('upragnenie_5_stat_3') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_stat_3.html";
	} else if (localStorage.getItem('upragnenie_5_stat_2') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_stat_2.html";
	} else if (localStorage.getItem('upragnenie_5_stat_1') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_stat_1.html";
	} else if (localStorage.getItem('upragnenie_5_timer_4') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_end.html";
	} else if (localStorage.getItem('upragnenie_5_4_work') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_4_form.html";
	} else if (localStorage.getItem('upragnenie_5_4') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_4.html";
	} else if (localStorage.getItem('upragnenie_5_timer_3') === 'Yes' && podxod_4_5u != "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_4.html";
	} else if (localStorage.getItem('upragnenie_5_timer_3') === 'Yes' && podxod_4_5u == "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_end.html";
	} else if (localStorage.getItem('upragnenie_5_3_work') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_3_form.html";
	} else if (localStorage.getItem('upragnenie_5_3') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_3.html";
	} else if (localStorage.getItem('upragnenie_5_timer_2') === 'Yes' && podxod_3_5u != "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_3.html";
	} else if (localStorage.getItem('upragnenie_5_timer_2') === 'Yes' && podxod_3_5u == "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_end.html";
	} else if (localStorage.getItem('upragnenie_5_2_work') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_2_form.html";
	} else if (localStorage.getItem('upragnenie_5_2') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_2.html";
	} else if (localStorage.getItem('upragnenie_5_timer_1') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_2.html";
	} else if (localStorage.getItem('upragnenie_5_1_work') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_1_form.html";
	} else if (localStorage.getItem('upragnenie_5_1') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_1.html";
	} else if (localStorage.getItem('upragnenie_5_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_1.html";
	} else if (localStorage.getItem('upragnenie_5_razminka_2') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_5_razminka_timer') === 'Yes' && upragnenie_5_razminka_2 == "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_1.html";
	} else if (localStorage.getItem('upragnenie_5_razminka_timer') === 'Yes' && upragnenie_5_razminka_2 != "Нет") {
		location.href = "../upragnenie_5/upragnenie_5_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_5_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_5_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_5/upragnenie_5_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_5_razminka') === 'Yes') {
		location.href = "../upragnenie_5/upragnenie_5_razminka.html";
	} //конец 5 упражнения 
	// 4 упражение 
	else if (localStorage.getItem('upragnenie_4_stat_3') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_stat_3.html";
	} else if (localStorage.getItem('upragnenie_4_stat_2') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_stat_2.html";
	} else if (localStorage.getItem('upragnenie_4_stat_1') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_stat_1.html";
	} else if (localStorage.getItem('upragnenie_4_timer_4') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_end.html";
	} else if (localStorage.getItem('upragnenie_4_4_work') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_4_form.html";
	} else if (localStorage.getItem('upragnenie_4_4') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_4.html";
	} else if (localStorage.getItem('upragnenie_4_timer_3') === 'Yes' && podxod_4_4u != "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_4.html";
	} else if (localStorage.getItem('upragnenie_4_timer_3') === 'Yes' && podxod_4_4u == "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_end.html";
	} else if (localStorage.getItem('upragnenie_4_3_work') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_3_form.html";
	} else if (localStorage.getItem('upragnenie_4_3') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_3.html";
	} else if (localStorage.getItem('upragnenie_4_timer_2') === 'Yes' && podxod_3_4u != "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_3.html";
	} else if (localStorage.getItem('upragnenie_4_timer_2') === 'Yes' && podxod_3_4u == "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_end.html";
	} else if (localStorage.getItem('upragnenie_4_2_work') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_2_form.html";
	} else if (localStorage.getItem('upragnenie_4_2') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_2.html";
	} else if (localStorage.getItem('upragnenie_4_timer_1') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_2.html";
	} else if (localStorage.getItem('upragnenie_4_1_work') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_1_form.html";
	} else if (localStorage.getItem('upragnenie_4_1') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_1.html";
	} else if (localStorage.getItem('upragnenie_4_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_1.html";
	} else if (localStorage.getItem('upragnenie_4_razminka_2') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_4_razminka_timer') === 'Yes' && upragnenie_4_razminka_2 == "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_1.html";
	} else if (localStorage.getItem('upragnenie_4_razminka_timer') === 'Yes' && upragnenie_4_razminka_2 != "Нет") {
		location.href = "../upragnenie_4/upragnenie_4_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_4_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_4_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_4/upragnenie_4_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_4_razminka') === 'Yes') {
		location.href = "../upragnenie_4/upragnenie_4_razminka.html";
	} //конец 4 упражнения 
	// 3 упражение 
	else if (localStorage.getItem('upragnenie_3_stat_3') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_stat_3.html";
	} else if (localStorage.getItem('upragnenie_3_stat_2') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_stat_2.html";
	} else if (localStorage.getItem('upragnenie_3_stat_1') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_stat_1.html";
	} else if (localStorage.getItem('upragnenie_3_timer_4') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_end.html";
	} else if (localStorage.getItem('upragnenie_3_4_work') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_4_form.html";
	} else if (localStorage.getItem('upragnenie_3_4') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_4.html";
	} else if (localStorage.getItem('upragnenie_3_timer_3') === 'Yes' && podxod_4_3u != "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_4.html";
	} else if (localStorage.getItem('upragnenie_3_timer_3') === 'Yes' && podxod_4_3u == "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_end.html";
	} else if (localStorage.getItem('upragnenie_3_3_work') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_3_form.html";
	} else if (localStorage.getItem('upragnenie_3_3') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_3.html";
	} else if (localStorage.getItem('upragnenie_3_timer_2') === 'Yes' && podxod_3_3u != "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_3.html";
	} else if (localStorage.getItem('upragnenie_3_timer_2') === 'Yes' && podxod_3_3u == "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_end.html";
	} else if (localStorage.getItem('upragnenie_3_2_work') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_2_form.html";
	} else if (localStorage.getItem('upragnenie_3_2') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_2.html";
	} else if (localStorage.getItem('upragnenie_3_timer_1') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_2.html";
	} else if (localStorage.getItem('upragnenie_3_1_work') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_1_form.html";
	} else if (localStorage.getItem('upragnenie_3_1') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_1.html";
	} else if (localStorage.getItem('upragnenie_3_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_1.html";
	} else if (localStorage.getItem('upragnenie_3_razminka_2') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_3_razminka_timer') === 'Yes' && upragnenie_3_razminka_2 == "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_1.html";
	} else if (localStorage.getItem('upragnenie_3_razminka_timer') === 'Yes' && upragnenie_3_razminka_2 != "Нет") {
		location.href = "../upragnenie_3/upragnenie_3_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_3_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_3_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_3/upragnenie_3_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_3_razminka') === 'Yes') {
		location.href = "../upragnenie_3/upragnenie_3_razminka.html";
	} //конец 3 упражнения 
	// 2 упражение 
	else if (localStorage.getItem('upragnenie_2_stat_3') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_stat_3.html";
	} else if (localStorage.getItem('upragnenie_2_stat_2') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_stat_2.html";
	} else if (localStorage.getItem('upragnenie_2_stat_1') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_stat_1.html";
	} else if (localStorage.getItem('upragnenie_2_timer_4') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_end.html";
	} else if (localStorage.getItem('upragnenie_2_4_work') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_4_form.html";
	} else if (localStorage.getItem('upragnenie_2_4') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_4.html";
	} else if (localStorage.getItem('upragnenie_2_timer_3') === 'Yes' && podxod_4_2u != "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_4.html";
	} else if (localStorage.getItem('upragnenie_2_timer_3') === 'Yes' && podxod_4_2u == "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_end.html";
	} else if (localStorage.getItem('upragnenie_2_3_work') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_3_form.html";
	} else if (localStorage.getItem('upragnenie_2_3') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_3.html";
	} else if (localStorage.getItem('upragnenie_2_timer_2') === 'Yes' && podxod_3_2u != "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_3.html";
	} else if (localStorage.getItem('upragnenie_2_timer_2') === 'Yes' && podxod_3_2u == "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_end.html";
	} else if (localStorage.getItem('upragnenie_2_2_work') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_2_form.html";
	} else if (localStorage.getItem('upragnenie_2_2') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_2.html";
	} else if (localStorage.getItem('upragnenie_2_timer_1') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_2.html";
	} else if (localStorage.getItem('upragnenie_2_1_work') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_1_form.html";
	} else if (localStorage.getItem('upragnenie_2_1') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_1.html";
	} else if (localStorage.getItem('upragnenie_2_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_1.html";
	} else if (localStorage.getItem('upragnenie_2_razminka_2') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_2_razminka_timer') === 'Yes' && upragnenie_2_razminka_2 == "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_1.html";
	} else if (localStorage.getItem('upragnenie_2_razminka_timer') === 'Yes' && upragnenie_2_razminka_2 != "Нет") {
		location.href = "../upragnenie_2/upragnenie_2_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_2_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_2_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_2/upragnenie_2_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_2_razminka') === 'Yes') {
		location.href = "../upragnenie_2/upragnenie_2_razminka.html";
	} //конец 2 упражнения 
	// 1 упражение 
	else if (localStorage.getItem('upragnenie_1_stat_3') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_stat_3.html";
	} else if (localStorage.getItem('upragnenie_1_stat_2') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_stat_2.html";
	} else if (localStorage.getItem('upragnenie_1_stat_1') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_stat_1.html";
	} else if (localStorage.getItem('upragnenie_1_timer_4') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_end.html";
	} else if (localStorage.getItem('upragnenie_1_4_work') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_4_form.html";
	} else if (localStorage.getItem('upragnenie_1_4') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_4.html";
	} else if (localStorage.getItem('upragnenie_1_timer_3') === 'Yes' && podxod_4_1u != "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_4.html";
	} else if (localStorage.getItem('upragnenie_1_timer_3') === 'Yes' && podxod_4_1u == "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_end.html";
	} else if (localStorage.getItem('upragnenie_1_3_work') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_3_form.html";
	} else if (localStorage.getItem('upragnenie_1_3') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_3.html";
	} else if (localStorage.getItem('upragnenie_1_timer_2') === 'Yes' && podxod_3_1u != "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_3.html";
	} else if (localStorage.getItem('upragnenie_1_timer_2') === 'Yes' && podxod_3_1u == "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_end.html";
	} else if (localStorage.getItem('upragnenie_1_2_work') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_2_form.html";
	} else if (localStorage.getItem('upragnenie_1_2') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_2.html";
	} else if (localStorage.getItem('upragnenie_1_timer_1') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_2.html";
	} else if (localStorage.getItem('upragnenie_1_1_work') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_1_form.html";
	} else if (localStorage.getItem('upragnenie_1_1') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_1.html";
	} else if (localStorage.getItem('upragnenie_1_razminka_timer_2') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_1.html";
	} else if (localStorage.getItem('upragnenie_1_razminka_2') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_1_razminka_timer') === 'Yes' && upragnenie_1_razminka_2 == "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_1.html";
	} else if (localStorage.getItem('upragnenie_1_razminka_timer') === 'Yes' && upragnenie_1_razminka_2 != "Нет") {
		location.href = "../upragnenie_1/upragnenie_1_razminka_2.html";
	} else if (localStorage.getItem('upragnenie_1_1_razminka_2_work') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_razminka_timer_2.html";
	} else if (localStorage.getItem('upragnenie_1_1_razminka_work') === 'Yes' ) {
		location.href = "../upragnenie_1/upragnenie_1_razminka_timer.html";			
	} else if (localStorage.getItem('upragnenie_1_razminka') === 'Yes') {
		location.href = "../upragnenie_1/upragnenie_1_razminka.html";
	} //конец 1 упражнения  
	else if (localStorage.getItem('razminka_4_timer') === 'Yes') {
		location.href = "../razminka/anons_posle_razminki.html";
	} else if (localStorage.getItem('razminka_4') === 'Yes') {
		location.href = "../razminka/razminka_4.html";
	} else if (localStorage.getItem('razminka_3_timer') === 'Yes' && razminka_4 != "Нет") {
		location.href = "../razminka/razminka_4.html";
	} else if (localStorage.getItem('razminka_3') === 'Yes') {
		location.href = "../razminka/razminka_3.html";
	} else if (localStorage.getItem('razminka_2_timer') === 'Yes' && razminka_3 != "Нет") {
		location.href = "../razminka/razminka_3.html";
	} else if (localStorage.getItem('razminka_2') === 'Yes') {
		location.href = "../razminka/razminka_2.html";
	} else if (localStorage.getItem('razminka_1_timer') === 'Yes') {
		location.href = "../razminka/razminka_2.html";
	} else if (localStorage.getItem('razminka_1') === 'Yes') {
		location.href = "../razminka/razminka_1.html";
	} //конец разм
	else {}

});