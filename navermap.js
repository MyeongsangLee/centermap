
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 11 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

var arr = [];

arr[0] = '경기 고양시 일산동구견달산로161번길 77 (식사동)';
arr[1] = '경기 구리시검배로 51 (수택동) 4층';
arr[2] = '경기 군포시군포로 789 (산본동) 온누리청소년센터';
arr[3] = '경기 성남시 중원구성남대로1151번길 25 (성남동)'
arr[4] = '경기 안양시 동안구관악대로 346 (관양동, 코오롱동산타워상가동 401호)';
arr[5] = '경기 용인시 수지구문인로39번길 7 (풍덕천동)';
arr[6] = '경기 의정부시경의로 56 (의정부동) 유풍빌딩 5층';
arr[7] = '경기 하남시대청로 33 (신장동) 현대베스코아 1001, 1002호';
arr[8] = '경기도 고양시 일산동구견달산로 161번길 77';
arr[9] = '경기도 고양시 일산서구현중로 26번길37-9';
arr[10] = '경기도 구리시검배로 51, 4층(수택동)';
arr[11] = '경기도 구리시안골로 32-1';
arr[12] = '경기도 김포시걸포로 76 김포중봉청소년수련관 3층';
arr[13] = '경기도 남양주시홍유릉로 248번길 39 다남빌딩 203호';
arr[14] = '경기도 부천시부일로 763번길 16-23(역곡동)';
arr[15] = '경기도 부천시부천로54번길 9(심곡동)';
arr[16] = '경기도 성남시 수정구위례서일로 12 우남이타워프라자8층';
arr[17] = '경기도 성남시 중원구광명로 5, 10층';
arr[18] = '경기도 성남시 중원구마지로29 럭키참조은 202호';
arr[19] = '경기도 성남시 중원구성남대로1151번길 25 (성남동)';
arr[20] = '경기도 성남시 중원구원터로 106번길 4, 요림빌딩 3층';
arr[21] = '경기도 수원시 권선구경수대로261(세류동, 리치타워 3층)';
arr[22] = '경기도 수원시 팔달구행궁로 77, 3층 (송산빌딩)';
arr[23] = '경기도 시흥시시흥대로 1073번길 4-2';
arr[24] = '경기도 시흥시오동마을로 33, 금광빌딩 5층';
arr[25] = '경기도 안산시 단원구원포공원1로 35, 제일프라자 501호';
arr[26] = '경기도 안산시 상록구예술대학로8길 17(월피동)';
arr[27] = '경기도 안양시 동안구경수대로 606 봉성빌딩 5층(호계동)';
arr[28] = '경기도 안양시 동안구관악대로 346 (관양동, 코오롱동산타워) 상가동 401호';
arr[29] = '경기도 안양시 만안구안양로 263번길 31(안양동)';
arr[30] = '경기도 오산시오산로 (궐동) 366';
arr[31] = '경기도 용인시 수지구문인로39번길 7(풍덕천동 667-3)';
arr[32] = '경기도 용인시 수지구풍덕천로 189번길 4-11(풍덕천동 738-9)';
arr[33] = '경기도 의정부시경의로56, 유풍빌딩 5층';
arr[34] = '경기도 의정부시비우로 12, 청소년비전센터 3,4층';
arr[35] = '경기도 의정부시신흥로 395, 5층(가능동)';
arr[36] = '경기도 이천시영창로227번길 28, 대호 2차@ 111호';
arr[37] = '경기도 평택시매봉산4길 26(비전동825-15)';
arr[38] = '경기도 하남시대청로 33 (신장동) 현대베스코아 1001, 1002호';
arr[39] = '경기도 화성시봉담읍 매봉로 478, 대호프라자 303호';


var loc = [];
// loc[0] = '<div style="width:150px;text-align:center;padding:6px 0;">쉼터1</div>';

var j = 0;

for (var i = 0; i < arr.length; i++) {

    console.log("111", i);
    var loc1 = loc[i];

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(arr[i], function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);


            var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png';
            var imageSize = new kakao.maps.Size(20, 21);
            var imageOption = {offset: new kakao.maps.Point(27, 69)};
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
                opacity : 1,
                image: markerImage
            });

//            var loc1 = loc[j++];
//            console.log(loc1);
            // 인포윈도우로 장소에 대한 설명을 표시합니다
  //          var infowindow = new kakao.maps.InfoWindow({
    //            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
    //            content: loc1
    //        });

    //        infowindow.open(map, marker);
            
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } else {
            console.log("지도 검색을 못했습니다.")
        }    
    });    

}