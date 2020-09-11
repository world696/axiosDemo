function showUserData(res){
    console.log(res.user);
    var str = '';
	res.forEach((item, index) => {
        str += `<tr>
            <td>${item.userID}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.sex}</td>
            <td>${item.city}</td>
        </tr>`
		})
	showUserList.innerHTML = str;
}