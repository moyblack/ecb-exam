import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

export default function handler(req, res) {
  db.defaults({ services: [
    { id: 3340, description: "change of suspension", make:"Nissan", model:"Versa", estimatedate:"2021/12/01", image:"http://3.23.108.188/cars/versa.jpg"},
    { id: 3341, description: "motor adjustment", make:"Honda", model:"CR-V", estimatedate:"", image:"http://3.23.108.188/cars/CR-V.jpg"},
    { id: 3342, description: "engine tuning", make:"Honda", model:"Versa", estimatedate:"2020/20/12", km:90000, image:"http://3.23.108.188/cars/civic.jpg"},
    { id: 3343, description: "oil change", make:"Volkswaguen", model:"Tiguan", km:13500 , image:"http://3.23.108.188/cars/tiguan.jpg"},
    { id: 3344, description: "change of pads", make:"Nissan", model:"Sentra", km: 6000, image:"http://3.23.108.188/cars/sentra.jpg"},
    { id: 3345, description: "change of pads", make:"Volkswagen", model:"Vento", km: 80050, image:"http://3.23.108.188/cars/vento.jpg"},
    { id: 3346, description: "Change Transmission (CVT)", make:"Chevrolet", model:"Aveo NG", estimatedate:"2021/09/07", km: 33460, image:"http://3.23.108.188/cars/aveo.jpg"},
    { id: 3347, description: "Change ligths", make:"Chevrolet", model:"Spark", km: 16098, image:"http://3.23.108.188/cars/spark.jpg"}
  ],
  }).write();

  res.status(200).json(db.get('services').value())
}