import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/OnePlus12/Dec3/1/D108792004_WLD_OnePlus_Waffle_NewLaunch_DesktopTall_Hero_3000x1200_2._CB585520158_.jpg"
        />

        <div className="home__row">
          <Product
            title={"Samsung Galaxy S23 Ultra 5G (Green, 12GB, 512GB Storage)"}
            price={134999}
            image={
              "https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg"
            }
            rating={5}
            id={"111"}
          />
          <Product
            title={"Samsung Galaxy Z Fold5 5G (Cream, 12GB RAM, 256GB Storage)"}
            price={154999}
            image={
              "https://m.media-amazon.com/images/I/716pi7fRTpL._SL1500_.jpg"
            }
            rating={4}
            id={"112"}
          />
          <Product
            title={
              "Nothing Phone (2) 5G (White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OIS)+50MP | 32MP Front Camera | Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W:100% in 55 Minutes"
            }
            price={44998}
            image={
              "https://m.media-amazon.com/images/I/71YoqE7ZJrL._SL1500_.jpg"
            }
            rating={4}
            id={"113"}
          />
          <Product
            title={"OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)"}
            price={61999}
            image={
              "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg"
            }
            rating={5}
            id={"114"}
          />
          <Product
            title={"Oneplus Open (Voyager Black, 16GB RAM, 512GB Storage)"}
            price={139999}
            image={
              "https://m.media-amazon.com/images/I/719QmmyMLYL._SL1500_.jpg"
            }
            rating={5}
            id={"115"}
          />
          <Product
            title={"Apple iPhone 15 Pro Max (256 GB) - Natural Titanium"}
            price={156900}
            image={
              "https://m.media-amazon.com/images/I/81SigpJN1KL._SL1500_.jpg"
            }
            rating={3}
            id={"116"}
          />
          <Product
            title={
              "iQOO 12 5G (Alpha, 12GB RAM, 256GB Storage) |India's 1st Snapdragon® 8 Gen 3 Mobile Platform | India's only Flagship with 50MP + 50MP + 64MP Camera"
            }
            price={52999}
            image={
              "https://m.media-amazon.com/images/I/61JUyx1-SbL._SL1200_.jpg"
            }
            rating={5}
            id={"117"}
          />
          <Product
            title={
              "Samsung Galaxy A34 5G (Awesome Violet, 8GB, 256GB Storage) | 48 MP No Shake Cam (OIS) | IP67 | Gorilla Glass 5 | Voice Focus | Travel Adapter to be Purchased Separately"
            }
            price={30999}
            image={
              "https://m.media-amazon.com/images/I/71669TpsvKL._SL1500_.jpg"
            }
            rating={4}
            id={"118"}
          />
          <Product
            title={
              "HONOR 90 (Emerald Green, 12GB + 512GB) | India's First Eye Risk-Free Display | 200MP Main & 50MP Selfie Camera | Segment First Quad-Curved AMOLED Screen | Without Charger"
            }
            price={39999}
            image={
              "https://m.media-amazon.com/images/I/81uNWyk3PaL._SL1500_.jpg"
            }
            rating={5}
            id={"119"}
          />
          <Product
            title={
              'Motorola razr 40 (Sage Green, 8GB RAM, 256GB Storage) | External AMOLED Display | 6.9" AMOLED 144Hz Display | 64MP Main Camera | Android 13'
            }
            price={44999}
            image={
              "https://m.media-amazon.com/images/I/61wp0d+7WGL._SL1200_.jpg"
            }
            rating={3}
            id={"120"}
          />
          <Product
            title={
              "realme narzo 60 Pro (Cosmic Black,12GB+1TB) Ultra Smooth 120 Hz Super Amoled Curved Display | 100 MP OIS Camera"
            }
            price={29999}
            image={
              "https://m.media-amazon.com/images/I/81ZV6G2iRrL._SL1500_.jpg"
            }
            rating={4}
            id={"121"}
          />
          <Product
            title={"Samsung Galaxy S21 FE 5G (Graphite, 8GB, 128GB Storage)"}
            price={30493}
            image={
              "https://m.media-amazon.com/images/I/81cHpJNr07L._SL1500_.jpg"
            }
            rating={4}
            id={"122"}
          />
          <Product
            title={"Motorola Edge 40 5G (Nebula Green, 8GB RAM, 256GB Storage)"}
            price={28200}
            image={
              "https://m.media-amazon.com/images/I/71AnGkTZ9xL._SL1500_.jpg"
            }
            rating={3}
            id={"123"}
          />
          <Product
            title={
              "iQOO Neo 7 Pro 5G (Dark Storm, 8Gb Ram, 128Gb Storage) | Snapdragon 8+ Gen 1 | Independent Gaming Chip | Flagship 50Mp Ois Camera | Ag Glass Design, Orange"
            }
            price={34999}
            image={
              "https://m.media-amazon.com/images/I/611rQWZa5rL._SL1200_.jpg"
            }
            rating={5}
            id={"124"}
          />
          <Product
            title={"Apple iPhone 13 (256GB) - Pink"}
            price={64990}
            image={
              "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg"
            }
            rating={4}
            id={"125"}
          />
          <Product
            title={"Pixel 6a 5G (Charcoal, 6GB RAM, 128GB Storage)"}
            price={30990}
            image={"https://m.media-amazon.com/images/I/41Fz+kKsbPL.jpg"}
            rating={1}
            id={"126"}
          />
          <Product
            title={
              "Samsung Galaxy S23 5G Smartphone 256 GB 15.5 cm (6.1 inch) Phantom Black"
            }
            price={68999}
            image={
              "https://m.media-amazon.com/images/I/519nePwnpIL._SL1500_.jpg"
            }
            rating={4}
            id={"127"}
          />
          <Product
            title={"OnePlus 11R 5G (Sonic Black, 8GB RAM, 128GB Storage)"}
            price={39999}
            image={
              "https://m.media-amazon.com/images/I/61u9zN1HYCL._SL1500_.jpg"
            }
            rating={5}
            id={"128"}
          />
          <Product
            title={
              "Oppo Reno10 Pro 5G (Glossy Purple, 12GB RAM, 256GB Storage) New"
            }
            price={36920}
            image={"https://m.media-amazon.com/images/I/51nU4ybR1BL.jpg"}
            rating={3}
            id={"129"}
          />
          <Product
            title={"Apple iPhone 15 Pro (128 GB) - Natural Titanium"}
            price={130990}
            image={
              "https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg"
            }
            rating={5}
            id={"130"}
          />
          <Product
            title={"APPLE iPhone 14 (Blue, 128 GB)"}
            price={60999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"
            }
            rating={5}
            id={"131"}
          />
          <Product
            title={"MOTOROLA g54 5G (Mint Green, 256 GB)  (12 GB RAM)"}
            price={15999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/6/2/g54-5g-payw0005in-motorola-original-imagt3mekfgqkyk8.jpeg?q=70"
            }
            rating={4}
            id={"132"}
          />
          <Product
            title={"OnePlus Nord CE 2 Lite 5G (Blue Tide, 128 GB)  (6 GB RAM)"}
            price={17882}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/w/k/-original-imagg2abzhxjckxu.jpeg?q=70"
            }
            rating={4}
            id={"133"}
          />
          <Product
            title={"realme 11x 5G (Purple Dawn, 128 GB)  (8 GB RAM)"}
            price={15999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70"
            }
            rating={4}
            id={"134"}
          />
          <Product
            title={"POCO M6 Pro 5G (Power Black, 128 GB)  (6 GB RAM)"}
            price={11999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"
            }
            rating={4}
            id={"135"}
          />
          <Product
            title={"POCO C55 (Power Black, 64 GB)  (4 GB RAM)"}
            price={6499}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/y/g/-original-imagnfzybft7wzmp.jpeg?q=70"
            }
            rating={4}
            id={"136"}
          />
          <Product
            title={"vivo T2 Pro 5G (Dune Gold, 256 GB)  (8 GB RAM)"}
            price={24999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
            }
            rating={5}
            id={"137"}
          />
          <Product
            title={"vivo T2 5G (Nitro Blaze, 128 GB)  (8 GB RAM)"}
            price={18999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70"
            }
            rating={4}
            id={"138"}
          />
          <Product
            title={"POCO X5 5G (Supernova Green, 128 GB)  (6 GB RAM)"}
            price={12999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/i/0/-original-imagnqpnhtwr8chu.jpeg?q=70"
            }
            rating={4}
            id={"139"}
          />
          <Product
            title={"realme 11 Pro+ 5G (Sunrise Beige, 256 GB)  (8 GB RAM)"}
            price={25999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/k/m/11-pro-5g-rmx3741-realme-original-imagq6asfa6hg5eu.jpeg?q=70"
            }
            rating={4}
            id={"140"}
          />
          <Product
            title={"OPPO Reno10 5G (Silvery Grey, 256 GB)  (8 GB RAM)"}
            price={32999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/e/4/-original-imagtcrumzbqj4xd.jpeg?q=70"
            }
            rating={4}
            id={"141"}
          />
          <Product
            title={"Realme 11 5G (Glory Gold, 128 GB)  (8 GB RAM)"}
            price={16999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/j/d/-original-imagtqqddnkayg4x.jpeg?q=70"
            }
            rating={4}
            id={"142"}
          />
          <Product
            title={"MOTOROLA Edge 40 (Nebula Green, 256 GB)  (8 GB RAM)"}
            price={26999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70"
            }
            rating={4}
            id={"143"}
          />
          <Product
            title={"MOTOROLA Edge 40 Neo (Black Beauty, 128 GB)  (8 GB RAM)"}
            price={22999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/p/r/r/edge-40-neo-payj0002in-motorola-original-imagtkzh8zrvp3uj.jpeg?q=70"
            }
            rating={4}
            id={"144"}
          />
          <Product
            title={"Google Pixel 7 (Lemongrass, 128 GB)  (8 GB RAM)"}
            price={46999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/l/2/y/-original-imaggswcffkgcupp.jpeg?q=70"
            }
            rating={4}
            id={"145"}
          />
          <Product
            title={"APPLE iPhone 14 Plus (Blue, 128 GB)"}
            price={66999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70"
            }
            rating={5}
            id={"146"}
          />
          <Product
            title={"realme 11 Pro 5G (Astral Black, 256 GB)  (12 GB RAM)"}
            price={27999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/k/t/2/11-pro-5g-rmx3771-realme-original-imagq6aszgmb4xja.jpeg?q=70"
            }
            rating={4}
            id={"147"}
          />
          <Product
            title={"POCO X5 Pro 5G (Yellow, 128 GB)  (6 GB RAM)"}
            price={16999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/s/8/-original-imagmkjf9wqjurgf.jpeg?q=70"
            }
            rating={4}
            id={"148"}
          />
          <Product
            title={"POCO M6 5G (Orion Blue, 256 GB)  (8 GB RAM)"}
            price={13499}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/v/9/a/m6-5g-mzb0g4hin-poco-original-imagwes4x2bh29ek.jpeg?q=70"
            }
            rating={4}
            id={"149"}
          />
          <Product
            title={"REDMI A2 (Classic Black, 64 GB)  (2 GB RAM)"}
            price={5499}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/u/n/-original-imagwds6gyyhsw63.jpeg?q=70"
            }
            rating={4}
            id={"150"}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              "MSI Katana 17 Intel Core i7 12th Gen 12650H - (16 GB/1 TB SSD/Windows 11 Home/8 GB Graphics/NVIDIA GeForce RTX 4060/240 Hz) Katana 17 B12VFK-673IN Gaming Laptop  (17.3 Inch, Black, 2.6 Kg)"
            }
            price={129990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/j/k/x/-original-imagtfzmyxguhhjh.jpeg?q=70"
            }
            rating={5}
            id={"210"}
          />
          <Product
            title={
              'ASUS TUF Gaming F15, 15.6"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, 4GB NVIDIA GeForce RTX 3050 Ti, Gaming Laptop (16GB/512GB SSD/Windows 11/90WHrs Battery/Black/2.30 Kg), FX506HE-HN382W'
            }
            price={80990}
            image={
              "https://m.media-amazon.com/images/I/81UWgnVKDBL._SL1500_.jpg"
            }
            rating={5}
            id={"211"}
          />
          <Product
            title={
              'ASUS ROG Zephyrus Duo 16 (2023) Dual Screen Laptop, 16" (40.64 cm) QHD+ 240Hz/3ms, AMD Ryzen 9 7945HX, 16GB RTX 4090, Gaming Laptop (32GB/2TB SSD/Windows 11/With Office/Black/2.67 Kg), GX650PY-NM052WS'
            }
            price={429990}
            image={
              "https://m.media-amazon.com/images/I/812U5LMzf5L._SL1500_.jpg"
            }
            rating={3}
            id={"212"}
          />
          <Product
            title={
              'ASUS ROG Strix SCAR 16 (2023), Intel Core i9 13th Gen, 16" (40.64 cm) Mini-LED QHD+ 240Hz/3ms, 12GB RTX 4080, Gaming Laptop (32GB/1TB SSD/Win 11/Office 2021/90WHr Battery/Black/2.5 Kg), G634JZ-NM057WS'
            }
            price={294990}
            image={
              "https://m.media-amazon.com/images/I/71seVzxl-CL._SL1500_.jpg"
            }
            rating={4}
            id={"213"}
          />
          <Product
            title={
              "HP ZBook Studio 12th Gen Intel Core i9-12900H 16 inch(40.6 cm) WQUXGA Display Creator Laptop 500 nits/32GB RAM/1TB SSD/NVIDIA GeForce RTX 3080 Ti 12GB Graphics/Win 11/MSO/B&O/FPR, G9 Workstation PC"
            }
            price={390914}
            image={
              "https://m.media-amazon.com/images/I/716oJNJFLAL._SL1500_.jpg"
            }
            rating={4}
            id={"214"}
          />
          <Product
            title={
              "APPLE 2022 MacBook Pro Apple M2 - (8 GB/256 GB SSD/Mac OS Monterey) MNEP3HN/A  (13.3 Inch, Silver, 1.38 Kg)"
            }
            price={102990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/k/s/m/-original-imagfdewfh9z3pee.jpeg?q=70"
            }
            rating={5}
            id={"215"}
          />
          <Product
            title={
              "ASUS ROG Strix G15 AMD Ryzen 7 Octa Core 6800H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) G513RC-HN061W Gaming Laptop  (15.6 Inch, Eclipse Gray, 2.10 Kg)"
            }
            price={84990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/h/k/x/-original-imagtvq8w2nsamdh.jpeg?q=70"
            }
            rating={4}
            id={"216"}
          />
          <Product
            title={
              "Acer Nitro 5 Intel Core i7 12th Gen 12650H - (16 GB/512 GB SSD/Windows 11 Home/6 GB Graphics/NVIDIA GeForce RTX 4050/144 Hz) AN515-58-74GG Gaming Laptop  (15.6 Inch, Obsidian Black, 2.6 Kg)"
            }
            price={89990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/8/e/m/-original-imagqf3a3j6ebxzc.jpeg?q=70"
            }
            rating={5}
            id={"217"}
          />
          <Product
            title={
              "HP AMD Ryzen 3 Quad Core 5300U - (8 GB/512 GB SSD/Windows 11 Home) 15s-eq2143au Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 Kg, With MS Office)"
            }
            price={31990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/l/m/j/-original-imagwy8dydwzrnka.jpeg?q=70"
            }
            rating={4}
            id={"218"}
          />
          <Product
            title={
              "ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/256 GB SSD/Windows 11 Home) X515EA-EJ312W Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg)"
            }
            price={31990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/e/f/-original-imagrgprbhchwgve.jpeg?q=70"
            }
            rating={4}
            id={"219"}
          />
          <Product
            title={
              "ASUS Vivobook 15 Intel Core i5 11th Gen 1135G7 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ522WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)"
            }
            price={43990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/l/t/-original-imagtucmkuwggepy.jpeg?q=70"
            }
            rating={4}
            id={"220"}
          />
          <Product
            title={
              "DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (38 cm, Carbon Black, 1.65 Kg, With MS Office)"
            }
            price={36990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/o/s/-original-imaghzah9mjvukjz.jpeg?q=70"
            }
            rating={4}
            id={"221"}
          />
          <Product
            title={
              "Lenovo Intel Core i7 12th Gen 1255U - (16 GB/512 GB SSD/Windows 11 Home) V15 G3 IAP Thin and Light Laptop  (15.6 Inch, Iron Grey, 1.7 Kg)"
            }
            price={49990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/d/t/c/v15-g2-alc-laptop-lenovo-original-imaghq2ffspmtfuh.jpeg?q=70"
            }
            rating={4}
            id={"222"}
          />
          <Product
            title={
              "Acer Extensa Intel Core i3 N305 - (8 GB/512 GB SSD/Windows 11 Home) EX215-33 Notebook  (15.6 Inch, Pure Silver, 1.7 Kg)"
            }
            price={28990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/7/o/r/-original-imagnc38zedzfnw6.jpeg?q=70"
            }
            rating={4}
            id={"223"}
          />
          <Product
            title={
              "HP Intel Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 250 G8 Thin and Light Laptop  (15.6 inch, Dark Ash, 2.0 Kg)"
            }
            price={32880}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/9/v/w/245-g8-business-laptop-hp-original-imagn4bctguugysg.jpeg?q=70"
            }
            rating={5}
            id={"224"}
          />
          <Product
            title={
              "SAMSUNG Galaxy Book 2 Intel Core i5 12th Gen 1235U - (8 GB/512 GB SSD/Windows 11 Home) NP550 Thin and Light Laptop  (15.6 Inch, Graphite, 1.80 Kg, With MS Office)"
            }
            price={44990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/r/5/-original-imagupz9vdcgzvnf.jpeg?q=70"
            }
            rating={4}
            id={"225"}
          />
          <Product
            title={
              "ASUS Vivobook Go 15 OLED (2023) AMD Ryzen 3 Quad Core 7320U - (8 GB/512 GB SSD/Windows 11 Home) E1504FA-LK321WS Thin and Light Laptop  (15.6 Inch, Cool Silver, 1.63 Kg, With MS Office)"
            }
            price={46990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/a/k/k/-original-imagpxgru35rbzwz.jpeg?q=70"
            }
            rating={4}
            id={"226"}
          />
          <Product
            title={
              "Lenovo IdeaPad 1 AMD Athlon Dual Core 7120U - (8 GB/512 GB SSD/Windows 11 Home) 15AMN7 Thin and Light Laptop  (15.6 inch, Cloud Grey, 1.58 Kg, With MS Office)"
            }
            price={30190}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=70"
            }
            rating={4}
            id={"227"}
          />
          <Product
            title={
              "ASUS Vivobook Go 14 Intel Celeron Dual Core N4500 - (8 GB/256 GB SSD/Windows 11 Home) E410KA-EK013W Thin and Light Laptop  (14 inch, Black, 1.30 kg)"
            }
            price={27990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/t/w/i/-original-imagtvq2bmuazhsq.jpeg?q=70"
            }
            rating={4}
            id={"228"}
          />
          <Product
            title={
              "ASUS Vivobook 15 Intel Core i3 12th Gen i3-1220P - (8 GB/512 GB SSD/Windows 11 Home) X1502ZA-EJ385WS Thin and Light Laptop  (15.6 inch, Quiet Blue, 1.7 kg, With MS Office)"
            }
            price={43269}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/z/e/b/asus-vivobook-15-laptop-asus-original-imagt5yyzykayggk.jpeg?q=70"
            }
            rating={4}
            id={"229"}
          />
          <Product
            title={
              "HP Intel Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 250 G8 Thin and Light Laptop  (15.6 inch, Dark Ash, 2.0 Kg)"
            }
            price={29990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/9/v/w/245-g8-business-laptop-hp-original-imagn4bctguugysg.jpeg?q=70"
            }
            rating={4}
            id={"230"}
          />
          <Product
            title={
              "HP AMD Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15s- eq2144au Thin and Light Laptop  (15.6 inch, Natural Silver, 1.69 kg, With MS Office)"
            }
            price={43990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/m/u/-original-imagwy8dj3pzkecu.jpeg?q=70"
            }
            rating={4}
            id={"231"}
          />
          <Product
            title={
              "HP Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) 15s-fy5004TU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)"
            }
            price={44990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/r/e/m/-original-imagwy8dtfsaw599.jpeg?q=70"
            }
            rating={4}
            id={"232"}
          />
          <Product
            title={
              "Infinix Inbook Y1 Plus Intel Core i5 10th Gen 1035G1 - (8 GB/512 GB SSD/Windows 11 Home) XL28 Thin and Light Laptop  (15.6 inch, Blue, 1.76 kg)"
            }
            price={29990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/u/u/k/-original-imagmxuravjcmdwu.jpeg?q=70"
            }
            rating={4}
            id={"233"}
          />
          <Product
            title={
              "SAMSUNG Galaxy Book3 Intel Core i5 13th Gen 1335U - (8 GB/512 GB SSD/Windows 11 Home) NP750XFG-KB1IN Thin and Light Laptop  (15.6 Inch, Silver, 1.58 Kg, With MS Office)"
            }
            price={74990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/c/y/k/galaxy-book3-thin-and-light-laptop-samsung-original-imagnb2chzcxhwxk.jpeg?q=70"
            }
            rating={4}
            id={"234"}
          />
          <Product
            title={
              "Lenovo IdeaPad Slim 3 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) 15IAU7 Thin and Light Laptop  (15.6 Inch, Arctic Grey, 1.63 Kg, With MS Office)"
            }
            price={37990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/0/f/v/-original-imaguyhzwj4tqwqu.jpeg?q=70"
            }
            rating={4}
            id={"235"}
          />
          <Product
            title={
              "HP Victus AMD Ryzen 5 Hexa Core 7535HS - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050) 15-fb1015AX Gaming Laptop  (15.6 Inch, Mica Silver, 2.37 Kg)"
            }
            price={51990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/f/e/d/-original-imagud83gf3wkzh9.jpeg?q=70"
            }
            rating={4}
            id={"236"}
          />
          <Product
            title={
              "Acer Aspire 3 Intel Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) A315-59 Notebook  (15.6 inch, Pure Silver, 1.7 Kg, With MS Office)"
            }
            price={44990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/a/x/l/-original-imagqbud3jqmhdet.jpeg?q=70"
            }
            rating={4}
            id={"237"}
          />
          <Product
            title={
              "DELL Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) New Inspiron 15 Laptop Thin and Light Laptop  (15.6 Inch, Platinum Silver, 1.65 Kg, With MS Office)"
            }
            price={38999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/l1fc0i80/computer/9/5/r/inspiron-3525-thin-and-light-laptop-dell-original-imagczzfezyd7tqs.jpeg?q=70"
            }
            rating={4}
            id={"238"}
          />
          <Product
            title={
              "HP AMD Ryzen 5 Hexa Core 5500U - (16 GB/512 GB SSD/Windows 11 Home) 15s- eq2182AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)"
            }
            price={47490}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/computer/n/t/2/-original-imagwy8dwfbsjzgu.jpeg?q=70"
            }
            rating={4}
            id={"239"}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              "The Monk Who Sold His Ferrari Paperback – 25 September 2003"
            }
            price={199}
            image={
              "https://m.media-amazon.com/images/I/61pZyTuNDYL._SL1400_.jpg"
            }
            rating={4}
            id={"511"}
          />
          <Product
            title={
              "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money - That the Poor and Middle Class Do Not! "
            }
            price={5512.16}
            image={"https://m.media-amazon.com/images/I/51AHZGhzZEL.jpg"}
            rating={4}
            id={"512"}
          />
          <Product
            title={"Ikigai: The Japanese Secret to a Long and Happy Life"}
            price={346}
            image={"https://m.media-amazon.com/images/I/511HccWipML.jpg"}
            rating={4}
            id={"513"}
          />
          <Product
            title={
              "HOW TO WIN FRIENDS AND INFLUENCE PEOPLE Paperback – 20 May 2016"
            }
            price={88}
            image={
              "https://m.media-amazon.com/images/I/71JeBwdtGAL._SL1360_.jpg"
            }
            rating={5}
            id={"514"}
          />
          <Product
            title={
              "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)"
            }
            price={599}
            image={
              "https://m.media-amazon.com/images/I/71QKQ9mwV7L._SL1500_.jpg"
            }
            rating={5}
            id={"515"}
          />
          <Product
            title={
              "How to Train Your Mind: Exploring the Productivity Benefits of Meditation"
            }
            price={836}
            image={"https://m.media-amazon.com/images/I/51LMv04fxLL.jpg"}
            rating={5}
            id={"516"}
          />
          <Product
            title={
              "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships"
            }
            price={280}
            image={"https://m.media-amazon.com/images/I/51hAGh15bTL.jpg"}
            rating={4}
            id={"517"}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              "Apple Watch Ultra 2 [GPS + Cellular 49mm] Smartwatch with Rugged Titanium Case & Orange Ocean Band One Size. Fitness Tracker,Precision GPS,Action Button,Extra-Long Battery Life,Bright Retina Display"
            }
            price={89900}
            image={
              "https://m.media-amazon.com/images/I/71JNSeO-nbL._SL1500_.jpg"
            }
            rating={4}
            id={"711"}
          />
          <Product
            title={
              "Samsung Galaxy Watch 5 PRO [2022] (45mm) Titanium Case - (Black)"
            }
            price={46467}
            image={
              "https://m.media-amazon.com/images/I/61TVSilLI6L._SL1342_.jpg"
            }
            rating={4}
            id={"712"}
          />
          <Product
            title={
              "Amazfit T-Rex Ultra Smart Watch for Men,Dual-Band GPS, Route Import & Navigation,6 Satellite Positioning Systems,-30℃ Ultra-low Temperature Operation, Rugged Outdoor Military-grade Smartwatch (Sahara)"
            }
            price={45999}
            image={
              "https://m.media-amazon.com/images/I/71Fftc4L0EL._SL1500_.jpg"
            }
            rating={5}
            id={"713"}
          />
          <Product
            title={
              "Fitbit FB507RGPK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa Built-in, Sleep & Swim Tracking, Petal/Copper Rose, One Size (S & L Bands Included) (Petal/Copper Rose)"
            }
            price={12999}
            image={
              "https://m.media-amazon.com/images/I/61L5Jko2QqL._SL1500_.jpg"
            }
            rating={4}
            id={"714"}
          />
          <Product
            title={
              'Titan Zeal Premium Fashion Smartwatch|1.85" AMOLED Display with AOD|390 * 450 Pixel Resolution|Functional Crown|SingleSync BT Calling|Advanced Chipset|100+ Sports Modes & Watchfaces IP68 (Mesh Strap)'
            }
            price={10994}
            image={
              "https://m.media-amazon.com/images/I/81kZT071+bL._SX679_.jpg"
            }
            rating={4}
            id={"715"}
          />
          <Product
            title={
              'Fire-Boltt Apollo 3 Luxury Stainless Steel Smart Watch, 1.43" Super AMOLED, BT Calling Smartwatch  (Champagne Gold Strap, Free Size)'
            }
            price={2999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/0/f/q/-original-imagtbqyevggy28m.jpeg?q=70"
            }
            rating={4}
            id={"716"}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              "LG QHD IPS Ultragear Gaming Monitor 68 CM (27 Inches), QHD, 2560 x 1440, 1 MS, 144Hz, HDR 10, sRGB 99% (CIE1931), G-Sync Compatible, Freesync Premium, HDMI X 2, DP, HP Out 27GN800 (Black)"
            }
            price={22799}
            image={
              "https://m.media-amazon.com/images/I/61gza4Sh18L._SL1500_.jpg"
            }
            rating={4}
            id={"911"}
          />
          <Product
            title={
              "MSI G32Cq4 E2 31.5 Inch Wqhd (2560 X 1440Px) 170Hz 1Ms AMD Freesync Premium Anti Flicker Low Blue Light HDR Ready Curved Gaming LED Monitor"
            }
            price={23499}
            image={
              "https://m.media-amazon.com/images/I/718H3yI6WjL._SL1500_.jpg"
            }
            rating={4}
            id={"912"}
          />
          <Product
            title={
              "Acer Nitro Vg271U M3 27 Inch IPS Wqhd 2560X1440 Pixels Gaming Backlight Led LCD Monitor|180Hz Refresh Rate|0.5 Ms Response|Dci-P3 95%,Hdr10 Support|2X Hdmi,1X Dp|Eye Care|Stereo Speakers,Black"
            }
            price={18938}
            image={
              "https://m.media-amazon.com/images/I/81ONC2LXdnL._SL1500_.jpg"
            }
            rating={4}
            id={"913"}
          />
          <Product
            title={
              "Samsung 34-inch(86.8cm) 3440 x 1440 Pixels Odyssey OLED G8 Ultra WQHD, 175 Hz, 0.1ms, HAS, Curved Gaming Monitor, USB Type -C, Smart TV, Gaming Hub, AMD FreeSync (LS34BG850SWXXL, Black)"
            }
            price={116299}
            image={
              "https://m.media-amazon.com/images/I/81eLDCu76cL._SL1500_.jpg"
            }
            rating={5}
            id={"914"}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              "Apple AirPods(2nd gen) with Charging Case Bluetooth Headset with Mic  (White, True Wireless)"
            }
            price={11999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kpinwy80/headphone/x/r/e/mmef2hn-a-apple-original-imag3qe9hphsevrt.jpeg?q=70"
            }
            rating={5}
            id={"1010"}
          />
          <Product
            title={
              "APPLE AirPods Pro (2nd generation) with Active Noise Cancellation, Spatial Audio Bluetooth Headset  (White, True Wireless)"
            }
            price={18999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/s/t/m/-original-imaghxgnjdgyghfw.jpeg?q=70"
            }
            rating={5}
            id={"1011"}
          />
          <Product
            title={
              "APPLE AirPods Pro (2nd generation) with MagSafe Case (USB-C) Bluetooth Headset  (White, True Wireless)"
            }
            price={23998}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=70"
            }
            rating={5}
            id={"1012"}
          />
          <Product
            title={
              "realme Buds Air 5 Pro with 50dB ANC, 360 Spatial Audio and upto 40 hours Playback Bluetooth Headset  (Astral Black, True Wireless)"
            }
            price={4999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/n/n/-original-imagsjzc93u5eskr.jpeg?q=70"
            }
            rating={4}
            id={"1013"}
          />
          <Product
            title={
              "Nothing Ear (2) with Dual chamber sound, Hi-res audio, Smart ANC and Dual connection Bluetooth Headset  (Black, True Wireless)"
            }
            price={6999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/w/7/d/ear-2-nothing-original-imagr6xjkx2ahggx.jpeg?q=70"
            }
            rating={4}
            id={"1014"}
          />
          <Product
            title={
              "OnePlus Buds Z2 with Active Noise cancellation Bluetooth Headset  (Pearl White, True Wireless)"
            }
            price={4998}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kyhlfgw0/headphone/h/g/k/buds-z2-truly-wireless-earbuds-oneplus-original-imagapfckzzbufgd.jpeg?q=70"
            }
            rating={4}
            id={"1015"}
          />
          <Product
            title={
              "Google Pixel Buds A-Series with Google Assistant Bluetooth Headset  (Clearly White, True Wireless)"
            }
            price={4999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/krjjde80/headphone/a/t/9/pixel-buds-a-series-google-original-imag5b9dzmpnzhyd.jpeg?q=70"
            }
            rating={4}
            id={"1016"}
          />
          <Product
            title={
              "Google Pixel Buds Pro with Active Noise Cancellation Bluetooth Headset  (Charcoal, In the Ear)"
            }
            price={11999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/l5ld8y80/headphone/e/8/o/ga03201-google-original-imagg8d7bhxjduze.jpeg?q=70"
            }
            rating={4}
            id={"1017"}
          />
          <Product
            title={
              "SAMSUNG Galaxy Buds2 Pro SM-R510NLVAINU/SM-R510NLVAINS Bluetooth Headset  (Bora Purple, True Wireless)"
            }
            price={13499}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/o/m/l/galaxy-buds2-pro-sm-r510nlvainu-new-samsung-original-imags7kfzhmvewh3.jpeg?q=70"
            }
            rating={4}
            id={"1018"}
          />
          <Product
            title={
              "SONY WH-CH720N Active Noise Cancelling, 50 Hrs. Battery life, Multipoint Connection Bluetooth Headset  (Black, On the Ear)"
            }
            price={7990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/y/x/y/-original-imagz2d8fkkf5vme.jpeg?q=70"
            }
            rating={4}
            id={"1019"}
          />
          <Product
            title={
              "OnePlus Buds Pro 2 Bluetooth Headset  (Obsidian Black, True Wireless)"
            }
            price={11990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/k/9/j/buds-pro-2-oneplus-original-imaghtn8geqzfvj7.jpeg?q=70"
            }
            rating={4}
            id={"1020"}
          />
          <Product
            title={
              "Nothing Ear (stick) Bluetooth Headset  (White, True Wireless)"
            }
            price={4999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/c/3/-original-imagh3ygjs4gmr6d.jpeg?q=70"
            }
            rating={4}
            id={"1021"}
          />
          <Product
            title={
              "SAMSUNG Galaxy Buds 2 Bluetooth Headset  (Graphite, True Wireless)"
            }
            price={6599}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kst9gnk0/headphone/o/l/s/galaxy-buds-2-sm-r177nzkainu-samsung-original-imag6arjrmydyyef.jpeg?q=70"
            }
            rating={4}
            id={"1022"}
          />
          <Product
            title={
              "OnePlus Buds Z2 Bluetooth Headset  (Matte Black, True Wireless)"
            }
            price={4999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/v/p/h/buds-z2-oneplus-original-imagry4vywfezyqb.jpeg?q=70"
            }
            rating={4}
            id={"1023"}
          />
          <Product
            title={
              "SONY WF-C500 IPX4/20Hrs Battery Life Bluetooth Headset  (Black, True Wireless)"
            }
            price={5990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/ky7lci80/headphone/c/j/q/wf-c500-bz-in-sony-original-imagahvreyx7heq7.jpeg?q=70"
            }
            rating={4}
            id={"1024"}
          />
          <Product
            title={
              "SONY WF-1000XM5 Best Noise Cancelling TWS Earbuds,Multi-Point,Upto 36Hrs Battery Bluetooth Headset  (Black, True Wireless)"
            }
            price={24990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/4/g/wf-1000xm5-sony-original-imagtakf5q7dwhet.jpeg?q=70"
            }
            rating={4}
            id={"1025"}
          />
          <Product
            title={"SONY WH-1000XM4 Bluetooth Headset  (Black, On the Ear)"}
            price={22990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/l1dwknk0/headphone/b/f/2/wh-1000xm4-sony-original-imagcywfhzq8hx2z.jpeg?q=70"
            }
            rating={4}
            id={"1026"}
          />
          <Product
            title={
              "SONY WF-LS900N Battery Life: 20hours, Noise Cancellation, TWS Bluetooth Headset  (Black, True Wireless)"
            }
            price={12990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/p/i/4/wf-ls900-sony-original-imagjzsse8zyyfgf.jpeg?q=70"
            }
            rating={4}
            id={"1027"}
          />
          <Product
            title={
              "JBL Tune 760NC Active Noise Cancelling, 50 Hr Playtime, Fast Pair & Multi Connect Bluetooth Headset  (Black, On the Ear)"
            }
            price={4499}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kz4gh3k0/headphone/y/q/v/-original-imagb7g9h6cfxfh9.jpeg?q=70"
            }
            rating={4}
            id={"1028"}
          />
          <Product
            title={
              "Jabra Elite 5 Bluetooth Headsets with ANC, Multipoint, 6-mic call technology Bluetooth Headset  (Gold Beige, In the Ear)"
            }
            price={9999}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/w/g/r/elite-5-jabra-original-imagz62zca5k8hz4.jpeg?q=70"
            }
            rating={4}
            id={"1029"}
          />
          <Product
            title={
              "SONY WF-C700N Lightest TWS ANC 20Hr battery, In-Ear, 10 Min Quick Charge,Multi-Point Bluetooth Headset  (Black, True Wireless)"
            }
            price={7990}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/z/0/v/-original-imagrufzy5mev7kt.jpeg?q=70"
            }
            rating={4}
            id={"1030"}
          />
        </div>

        <div className="home__row">
          <Product
            title={"SKINN by TITAN RAW Eau de Parfum - 100 ml  (For Men)"}
            price={2595}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kq9ta4w0/perfume/y/c/n/100-raw-eau-de-parfum-skinn-by-titan-men-original-imag4bgbhskw7yvf.jpeg?q=70"
            }
            rating={4}
            id={"950"}
          />
          <Product
            title={
              "ARMAF CLUB DE NUIT INTENSE Eau de Parfum - 150 ml  (For Men)"
            }
            price={5100}
            image={
              "https://rukminim2.flixcart.com/image/832/832/l2arp8w0/perfume/d/o/9/150-club-de-nuit-intense-eau-de-parfum-armaf-men-original-imagdzftygxbrsub.jpeg?q=70"
            }
            rating={4}
            id={"951"}
          />
          <Product
            title={
              "Paris Corner Emir Frenetic Homme Intense Extrait De Parfum 80ml Eau de Parfum - 80 ml  (For Men)"
            }
            price={2600}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/o/k/r/80-emir-frenetic-homme-intense-extrait-de-parfum-80ml-eau-de-original-imagrhyvmd2pwj5w.jpeg?q=70"
            }
            rating={4}
            id={"952"}
          />
          <Product
            title={
              "ARMAF Hunter Jungle Green Eau de Parfum - 100 ml  (For Men)"
            }
            price={2592}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/1/m/i/100-hunter-jungle-green-eau-de-parfum-armaf-men-original-imagpfghx4y6gch8.jpeg?q=70"
            }
            rating={3}
            id={"953"}
          />
          <Product
            title={"SKINN by TITAN nude Eau de Parfum - 100 ml  (For Women)"}
            price={2595}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/s/x/k/-original-imagrmc43hgyzuzt.jpeg?q=70"
            }
            rating={5}
            id={"954"}
          />
          <Product
            title={"Ajmal Wisal Dahab Perfume - 50 ml  (For Men)"}
            price={3000}
            image={
              "https://rukminim2.flixcart.com/image/832/832/kkzrpu80/perfume/p/c/w/50-wisal-dhahab-eau-de-parfum-ajmal-men-original-imagy7mqcjfszstp.jpeg?q=70"
            }
            rating={4}
            id={"955"}
          />
          <Product
            title={
              "Calvin Klein CK EVERYONE EDP 100ML Eau de Parfum - 100 ml  (For Men & Women)"
            }
            price={4692}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/d/x/f/100-ck-everyone-edp-100ml-eau-de-parfum-calvin-klein-men-women-original-imaghutwnac5xvsp.jpeg?q=70"
            }
            rating={4}
            id={"956"}
          />
          <Product
            title={"Lattafa KHAMRAH Eau de Parfum - 100 ml  (For Men & Women)"}
            price={2699}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/m/b/r/100-khamrah-eau-de-parfum-lattafa-men-women-original-imaggpgtxg8uf7ye.jpeg?q=70"
            }
            rating={4}
            id={"957"}
          />
          <Product
            title={
              "Oud Arabia Dubai Jannat-e-zuhur Eau de Parfum - 100 ml  (For Men & Women)"
            }
            price={4890}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/w/g/l/100-dubai-jannat-e-zuhur-eau-de-parfum-oud-arabia-men-women-original-imagsqvgavjef9gh.jpeg?q=70"
            }
            rating={4}
            id={"958"}
          />
          <Product
            title={"ARMAF Hunter Killer Red Eau de Parfum - 100 ml  (For Men)"}
            price={2592}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/s/f/m/100-hunter-killer-red-eau-de-parfum-armaf-men-original-imagpfgk8fcn7wzh.jpeg?q=70"
            }
            rating={4}
            id={"958"}
          />
          <Product
            title={"ARMAF Odyssey Wild One Eau de Parfum - 100 ml  (For Men)"}
            price={2592}
            image={
              "https://rukminim2.flixcart.com/image/832/832/xif0q/perfume/p/p/5/100-odyssey-wild-one-eau-de-parfum-armaf-men-original-imagpfgkguntwgdu.jpeg?q=70"
            }
            rating={4}
            id={"958"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
