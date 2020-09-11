layui.use(['element', 'form', 'laypage'], function() {
	var element = layui.element;
	var form = layui.form;
	var laypage = layui.laypage;
	laypage.render({
		elem: 'page', //
		count:8,
		limit: 3,
		page:true,
		groups:3
	});
	element.tabChange('demo', function(data) {
		console.log(data);
	});
});
function getUserData(){
    axios.post(apiUrl.user).then((res)=>{
    console.log(res.user);
	showUserData(res.user);
    })
}
