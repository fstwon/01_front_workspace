// category checkbox list, label 리스트 생성
const categoryList = {
	comp: '종합',
	novel: '소설',
	poem_essay: '시/에세이',
	ecom_manage: '경제/경영',
	develop: '자기계발',
	kids: '아동',
	trip: '여행',
	science: '과학',
	hist_cul: '역사/문학',
	lang: '외국어',
	computer: '컴퓨터',
	comics: '만화',
};

const categoryListElement = document.getElementById('categoryList');
const categoryKeyList = Object.keys(categoryList);
let itemsPerRow = 6;

for (let i = 0; i < Math.ceil(categoryKeyList.length / itemsPerRow); i++) {
	const tr = document.createElement('tr');
	tr.id = `categoryListRow${(i + 1) * itemsPerRow}`;
	if(i === 0) {
		const selectTd = document.createElement('td');
		const selectAllLabel = document.createElement('label');
		const selectAllInput = document.createElement('input');

		selectAllLabel.htmlFor = 'selectAll';
		selectAllLabel.innerHTML = '전체선택';

		selectAllInput.type = 'checkbox';
		selectAllInput.name = 'selectAll';
		selectAllInput.id = 'selectAll';
		selectAllInput.onchange = onChangeAll;

		selectTd.appendChild(selectAllInput);
		selectTd.appendChild(selectAllLabel);
		tr.appendChild(selectTd);
	}
	if(i > 0) {
		const emptyTd = document.createElement('td');
		tr.appendChild(emptyTd);
	}
	categoryListElement.appendChild(tr);
}

let categoryListRowIndex = itemsPerRow;
let times = 2;

for (let i in categoryKeyList) {
	i = Number(i);
	if (i >= categoryListRowIndex) {
		categoryListRowIndex = itemsPerRow * times;
		times++;
	}

	const tr = document.getElementById(`categoryListRow${categoryListRowIndex}`);
	const category = categoryKeyList[i];
	const label = document.createElement('label');
	const input = document.createElement('input');
	const td = document.createElement('td');

	input.type = 'checkbox';
	input.name = category;
	input.id = category;
	input.className = 'category';
	input.onchange = onChangeCheck;

	label.htmlFor = category;
	label.innerHTML = categoryList[category];

	td.appendChild(input);
	td.appendChild(label);

	tr.appendChild(td);
}

// select all
const categoryElementList = document.getElementsByClassName('category');
const selectAllElement = document.getElementById('selectAll');

function onChangeAll() {
	for (let categoryElement of categoryElementList) {
		categoryElement.checked = selectAllElement.checked;
	}
}

// select checkbox, 하나라도 체크 해제 시 전체 선택도 해제, 전체 선택되었을 경우 전체 선택 체크
function onChangeCheck() {
	let isAllChecked = true;
	for (let { checked } of categoryElementList) {
		if (checked === false) {
			isAllChecked = false;
		}
	}
	selectAllElement.checked = isAllChecked;
}

// 카테고리 선택 버튼 클릭 시 선택된 카테고리 목록 이름 selectedCategoryList에 출력
// 선택된 카테고리 id 배열에 저장
function onClickSelect() {
	const selectedCategoryListElement = document.getElementById(
		'selectedCategoryList'
	);
	const selectedCategoryList = [];
	for (let { id, checked } of categoryElementList) {
		if (checked === true) {
			selectedCategoryList.push(categoryList[id]);
		}
	}
	if (selectedCategoryList.length === 0) {
		selectedCategoryListElement.innerHTML = '선택된 카테고리가 없습니다.';
	} else {
		selectedCategoryListElement.innerHTML = selectedCategoryList.join(' ');
	}
}
