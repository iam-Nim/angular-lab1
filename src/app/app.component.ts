import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Danh sách địa danh nổi tiếng';
  lab = [
    {
      id: 1,
      name: "Biển Sầm Sơn",
      img:
        "https://www.celeb.vn/news/wp-content/uploads/2019/10/Phong-c%E1%BA%A3nh-h%E1%BB%AFu-t%C3%ACnh-t%E1%BA%A1i-B%C3%A3i-Khem.jpg",
      acreage: "100m2",
      history: "Biển Sầm Sơn thuộc thành phố Sầm Sơn, tỉnh Thanh Hóa trải dài gần 6 km từ cửa Lạch Hới đến chân núi Trường Lệ, với bờ cát vàng trải dài, thoai thoải, nước trong xanh từ lâu đã trở thành điểm đến hấp dẫn khách du lịch trong và ngoài nước. Bờ biển ở đây bằng phẳng với các bãi cát rộng đặc biệt là sóng đánh mạnh và cao vừa đủ, nước trong và nồng độ muối vừa phải.",
      nameCelebrity: "Nguyễn Ánh",
      imgCelebrity:
        "https://lh4.googleusercontent.com/-vNOKBC761Q8/TzKZw-Se1VI/AAAAAAAAJJA/w3anA0DbZIY/s390/120209_hanthienhai04.jpg",
      born_year: 1580,
      die_year: 1640
    },
    {
      id: 1,
      name: "Biển Làng Vân",
      img:
        "https://divui.com/blog/wp-content/uploads/2016/12/bai-bien-da-nang-a1.jpg",
      acreage: "150m2",
      history: "Biển Làng Vân nằm nép mình dưới chân đèo Hải Vân, phía Bắc thành phố Đà Nẵng. Nơi đây được ví von như một ngôi làng cổ tích hoang sơ, mộc mac. Có lẽ bởi vì bãi biển Làng Vân từ trước tới giờ yên tĩnh, bình yên và ít được nhiều người biết tới. Từ thành phố Đà Nẵng, bạn có thể di chuyển bằng xe máy hoặc ô tô đi về phía chân đèo Hải Vân ngay bên tay phải sẽ có biển chỉ dẫn vào nhà dân để gửi xe. Bạn phải mất một khoảng thời gian 15-20 phút đi bộ tầm 2 – 3 km để xuống đến đó.",
      nameCelebrity: "Nguyễn Hiền",
      imgCelebrity:
        "https://nguoinoitieng.tv/images/nnt/94/0/baah.jpg",
      born_year: 1868,
      die_year: 1925
    },
    {
      id: 3,
      name: "Biển Mỹ Khê",
      img:
        "https://m.justgola.com/media/a/00/17/98248_og_1.jpeg",
      acreage: "200m2",
      history: "Bãi biển Mỹ Khê nằm ở phường Phước Mỹ, quận Sơn Trà, thành phố Đà Nẵng. Là 1 trong 6 bãi biển được tạp chí Forbes bình chọn là bãi biển quyến rũ nhất hành tinh với những bãi cát mịn, trắng, xinh đẹp và thơ mộng. Tới Đà Nẵng chắc hẳn không ai bỏ qua 1 lần vui đùa và thư giãn trên bãi biển Mỹ Khê.",
      nameCelebrity: "Nguyễn Bính",
      imgCelebrity:
        "https://nguoikesu.com/images/wiki/nguyen-binh/4f16833386eecb49cdd8347f5b9e1ef8.jpg",
      birthday: 1918,
      lostYear: 1966
    }
];
  addLab = {
    id: null,
    name: null,
    img: null,
    acreage: null,
    history: null,
    nameCelebrity: null,
    imgCelebrity: null,
    birthday: null,
    lostYear: null,
  }
  addNewLab(event){
    let maxId=0;
    this.lab.forEach(function(val, index){
      if(val.id >= maxId){
        maxId=val.id;
      }
    });
    this.addLab.id = ++maxId;
    this.lab.push(this.addLab);
    console.log(this.addLab.id);
    this.addLab = {
      id: null,
      name: null,
      img: null,
      acreage: null,
      history: null,
      nameCelebrity: null,
      imgCelebrity: null,
      birthday:null,
      lostYear: null
    }
  }
  editLab(lab){
    this.addLab=lab;
  }
  removeLab(lab){
    this.lab = this.lab.filter(function(value, index){
      return value.id !=lab.id;
    });
  }
  constructor() { }

  ngOnInit() {
  }

}
