// JavaScript Document
function lof(x)
{
	location.href=x
}
/**
 * 刪除指定id的資料
 * @param {*} table 
 * @param {*} id 
 * 
 */
function del(table,id){
	$.post("./api/del.php",{table,id},function(){
		location.reload()
	})
}