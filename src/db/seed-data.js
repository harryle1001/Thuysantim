'use strict';
/* Dữ liệu mẫu — thay bằng dữ liệu thật trong trang Quản trị (/admin). */

const L = (vi, en, zh) => ({ vi, en, zh });

const categories = [
  { slug: 'men-vi-sinh', icon: 'microbe', name: L('Men vi sinh', 'Probiotics', '益生菌'), description: L('Chủng vi sinh tuyển chọn giúp phân hủy hữu cơ, ổn định nước và đường ruột.', 'Selected microbial strains that break down organic waste and stabilise water and gut.', '精选菌株，分解有机物，稳定水质与肠道。') },
  { slug: 'xu-ly-nuoc-day', icon: 'drop', name: L('Xử lý nước & đáy', 'Water & Pond Bottom', '水质与底质改良'), description: L('Hấp thu khí độc, cải thiện đáy ao, ổn định pH và màu nước.', 'Absorb toxic gases, improve the pond bottom and stabilise pH and water colour.', '吸附有毒气体，改良池底，稳定pH与水色。') },
  { slug: 'khoang-vitamin', icon: 'mineral', name: L('Khoáng & Vitamin', 'Minerals & Vitamins', '矿物质与维生素'), description: L('Bổ sung khoáng đa vi lượng, vitamin giúp lột xác, cứng vỏ, chống sốc.', 'Trace minerals and vitamins for moulting, shell hardening and stress relief.', '补充多种微量矿物质与维生素，助蜕壳、硬壳、抗应激。') },
  { slug: 'gan-ruot', icon: 'shield', name: L('Bổ gan & Đường ruột', 'Liver & Gut Care', '护肝与肠道保健'), description: L('Giải độc gan tụy, tăng hấp thu thức ăn, giảm FCR.', 'Support hepatopancreas detox, nutrient absorption and lower FCR.', '肝胰腺解毒，提高饲料吸收，降低饵料系数。') },
  { slug: 'thao-duoc', icon: 'leaf', name: L('Thảo dược', 'Herbal Extracts', '草本提取'), description: L('Chiết xuất thảo dược tự nhiên, an toàn, không tồn dư kháng sinh.', 'Natural herbal extracts — safe, with no antibiotic residues.', '天然草本提取，安全无抗生素残留。') },
  { slug: 'sat-trung', icon: 'flask', name: L('Sát trùng & Oxy', 'Disinfectants & Oxygen', '消毒剂与增氧'), description: L('Diệt khuẩn, nấm, nguyên sinh động vật; cấp cứu thiếu oxy.', 'Control bacteria, fungi and protozoa; emergency oxygen supply.', '杀灭细菌、真菌与原生动物；应急增氧。') },
];

const v = (...pairs) => pairs.map(([label, price]) => ({ label, price }));

const products = [
  {
    slug: 'tim-pro-bio-9', sku: 'TST-PB9', cat: 'men-vi-sinh', species: 'shrimp', color: '#6d28d9', badge: 'bestseller', featured: 1, rating: 4.9,
    name: L('TÍM PRO-BIO 9 — Men vi sinh xử lý nước đậm đặc', 'TÍM PRO-BIO 9 — Concentrated Water Probiotic', 'TÍM PRO-BIO 9 — 高浓度水质益生菌'),
    summary: L('9 chủng Bacillus & Lactobacillus mật độ 10¹⁰ CFU/g, phân hủy nhanh chất hữu cơ, giảm khí độc và ổn định màu nước.', '9 Bacillus & Lactobacillus strains at 10¹⁰ CFU/g — rapidly digests sludge, reduces toxic gases and stabilises water colour.', '9种芽孢杆菌与乳酸菌，10¹⁰ CFU/g，快速分解有机物，降低有毒气体，稳定水色。'),
    description: L(
      'TÍM PRO-BIO 9 là tổ hợp 9 chủng vi sinh có lợi được phân lập và tuyển chọn trong điều kiện ao nuôi Việt Nam. Các chủng hoạt động hiệp đồng trên toàn dải độ mặn 0–35‰, nhanh chóng chiếm ưu thế và lấn át vi khuẩn có hại như *Vibrio*.\n\n- Phân hủy thức ăn thừa, phân tôm và xác tảo tàn\n- Giảm NH₃, NO₂, H₂S tích tụ ở đáy ao\n- Ổn định pH và màu nước, hạn chế tảo độc\n- Bào tử chịu nhiệt, bảo quản ở nhiệt độ thường',
      'TÍM PRO-BIO 9 combines 9 beneficial strains isolated and selected under Vietnamese pond conditions. They work synergistically at 0–35‰ salinity, quickly dominating and suppressing harmful bacteria such as *Vibrio*.\n\n- Digests uneaten feed, faeces and dead algae\n- Reduces NH₃, NO₂ and H₂S at the pond bottom\n- Stabilises pH and water colour, limits toxic algae\n- Heat-stable spores, stored at room temperature',
      'TÍM PRO-BIO 9 由9种在越南池塘条件下分离筛选的有益菌组成，在0–35‰盐度范围内协同作用，迅速占据优势，抑制弧菌等有害菌。\n\n- 分解残饵、粪便及死藻\n- 降低池底氨氮、亚硝酸盐和硫化氢\n- 稳定pH与水色，抑制有害藻类\n- 耐热芽孢，常温保存'),
    composition: L('Bacillus subtilis, B. licheniformis, B. megaterium, B. pumilus, B. amyloliquefaciens, Lactobacillus plantarum, L. acidophilus, Nitrosomonas sp., Nitrobacter sp. — tổng ≥ 1×10¹⁰ CFU/g. Chất mang vừa đủ 1 kg.', 'Bacillus subtilis, B. licheniformis, B. megaterium, B. pumilus, B. amyloliquefaciens, Lactobacillus plantarum, L. acidophilus, Nitrosomonas sp., Nitrobacter sp. — total ≥ 1×10¹⁰ CFU/g. Carrier q.s. 1 kg.', '枯草芽孢杆菌、地衣芽孢杆菌、巨大芽孢杆菌、短小芽孢杆菌、解淀粉芽孢杆菌、植物乳杆菌、嗜酸乳杆菌、亚硝化单胞菌、硝化杆菌 — 总数≥1×10¹⁰ CFU/g，载体加至1 kg。'),
    usage: L('Xử lý nước định kỳ, gây màu nước, giảm bùn đáy và khí độc trong ao nuôi tôm thẻ, tôm sú.', 'Routine water treatment, water-colour building and sludge/toxic gas reduction in whiteleg and tiger shrimp ponds.', '用于南美白对虾、斑节对虾池塘的日常水质处理、肥水、减少底泥与有毒气体。'),
    dosage: L('Định kỳ: 1 kg/3.000–4.000 m³ nước, 5–7 ngày/lần.\nKhi nước xấu: 1 kg/2.000 m³, 2–3 ngày liên tục.\nỦ với 5 kg mật rỉ đường + 20 lít nước, sục khí 6–8 giờ trước khi tạt.', 'Routine: 1 kg per 3,000–4,000 m³, every 5–7 days.\nPoor water: 1 kg per 2,000 m³ for 2–3 consecutive days.\nActivate with 5 kg molasses + 20 L water, aerate 6–8 h before spreading.', '常规：每3,000–4,000 m³用1 kg，5–7天一次。\n水质差时：每2,000 m³用1 kg，连续2–3天。\n用5 kg糖蜜+20升水充气活化6–8小时后泼洒。'),
    variants: v(['500 g', 285000], ['1 kg', 520000], ['Thùng 10 kg', 4900000]),
  },
  {
    slug: 'tim-gut-zyme', sku: 'TST-GZ', cat: 'men-vi-sinh', species: 'all', color: '#7c3aed', badge: null, featured: 1, rating: 4.8,
    name: L('TÍM GUT-ZYME — Men tiêu hóa & enzyme đường ruột', 'TÍM GUT-ZYME — Digestive Probiotic & Enzymes', 'TÍM GUT-ZYME — 消化益生菌与肠道酶'),
    summary: L('Bacillus + enzyme protease, amylase, cellulase giúp tôm cá ăn khỏe, tiêu hóa tốt, giảm FCR.', 'Bacillus plus protease, amylase and cellulase for better appetite, digestion and lower FCR.', '芽孢杆菌+蛋白酶、淀粉酶、纤维素酶，提高摄食与消化，降低饵料系数。'),
    description: L('Bổ sung hệ vi sinh có lợi và enzyme ngoại bào trực tiếp vào đường ruột. Giúp ruột đầy, phân chắc, hạn chế hiện tượng ruột lỏng và phân trắng trong giai đoạn tăng trọng.', 'Delivers beneficial microbes and exogenous enzymes directly to the gut, keeping guts full and faeces firm and reducing loose-gut and white-faeces issues during grow-out.', '直接向肠道补充有益菌与外源酶，肠道饱满、粪便成形，减少养成期肠炎与白便问题。'),
    composition: L('Bacillus subtilis ≥ 5×10⁹ CFU/kg; Saccharomyces cerevisiae ≥ 1×10⁹ CFU/kg; Protease 200.000 UI; Amylase 50.000 UI; Cellulase 20.000 UI.', 'Bacillus subtilis ≥ 5×10⁹ CFU/kg; Saccharomyces cerevisiae ≥ 1×10⁹ CFU/kg; Protease 200,000 IU; Amylase 50,000 IU; Cellulase 20,000 IU.', '枯草芽孢杆菌≥5×10⁹ CFU/kg；酿酒酵母≥1×10⁹ CFU/kg；蛋白酶200,000 IU；淀粉酶50,000 IU；纤维素酶20,000 IU。'),
    usage: L('Trộn thức ăn hằng ngày cho tôm, cá giai đoạn ương và nuôi thịt.', 'Daily feed additive for shrimp and fish in nursery and grow-out.', '日常拌料，适用于虾鱼苗种与养成阶段。'),
    dosage: L('Phòng: 3–5 g/kg thức ăn, cho ăn 1–2 cữ/ngày.\nKhi tôm yếu ruột: 8–10 g/kg thức ăn, liên tục 5–7 ngày.', 'Prevention: 3–5 g per kg feed, 1–2 meals/day.\nWeak gut: 8–10 g per kg feed for 5–7 days.', '预防：每公斤饲料3–5 g，每天1–2餐。\n肠道弱时：每公斤饲料8–10 g，连用5–7天。'),
    variants: v(['1 kg', 360000], ['5 kg', 1650000]),
  },
  {
    slug: 'tim-zeo-clear', sku: 'TST-ZC', cat: 'xu-ly-nuoc-day', species: 'all', color: '#0f766e', badge: null, featured: 0, rating: 4.7,
    name: L('TÍM ZEO-CLEAR — Zeolite hạt cao cấp', 'TÍM ZEO-CLEAR — Premium Granular Zeolite', 'TÍM ZEO-CLEAR — 高级颗粒沸石'),
    summary: L('Zeolite tự nhiên hạt 1–2 mm, CEC cao, lắng tụ cặn bẩn, hấp thu khí độc và làm sạch đáy ao.', 'Natural 1–2 mm zeolite with high CEC — settles suspended solids, absorbs toxic gases and cleans the pond bottom.', '天然1–2 mm颗粒沸石，高阳离子交换量，沉降悬浮物，吸附有毒气体，净化池底。'),
    description: L('Hạt chìm nhanh xuống đáy, tạo lớp lọc tự nhiên. Đặc biệt hiệu quả khi đáy ao nhiều bùn đen, nước đục do phù sa hoặc sau khi tảo tàn.', 'Fast-sinking granules form a natural filter layer — especially effective on black-sludge bottoms, turbid water or after algae crashes.', '颗粒迅速沉底，形成天然过滤层，尤其适用于黑泥底、水体浑浊或倒藻后。'),
    composition: L('SiO₂ ≥ 65%, Al₂O₃ ≥ 12%, CEC ≥ 150 meq/100 g. Kích thước hạt 1–2 mm.', 'SiO₂ ≥ 65%, Al₂O₃ ≥ 12%, CEC ≥ 150 meq/100 g. Granule size 1–2 mm.', 'SiO₂≥65%，Al₂O₃≥12%，CEC≥150 meq/100 g，粒径1–2 mm。'),
    usage: L('Cải tạo đáy ao, lắng tụ chất lơ lửng, giảm khí độc.', 'Pond bottom improvement, flocculation, toxic gas reduction.', '改良池底，沉淀悬浮物，降低有毒气体。'),
    dosage: L('Định kỳ: 10–15 kg/1.000 m², 7–10 ngày/lần.\nĐáy ao dơ: 20–30 kg/1.000 m².', 'Routine: 10–15 kg per 1,000 m² every 7–10 days.\nDirty bottom: 20–30 kg per 1,000 m².', '常规：每1,000 m²用10–15 kg，7–10天一次。\n池底脏时：每1,000 m²用20–30 kg。'),
    variants: v(['Bao 20 kg', 260000]),
  },
  {
    slug: 'tim-yucca-max', sku: 'TST-YM', cat: 'xu-ly-nuoc-day', species: 'all', color: '#15803d', badge: 'premium', featured: 1, rating: 4.9,
    name: L('TÍM YUCCA MAX — Chiết xuất Yucca nguyên chất', 'TÍM YUCCA MAX — Pure Yucca Extract', 'TÍM YUCCA MAX — 纯丝兰提取物'),
    summary: L('100% chiết xuất Yucca schidigera, cắt nhanh NH₃ trong 3–6 giờ, cấp cứu tôm nổi đầu do khí độc.', '100% Yucca schidigera extract — cuts NH₃ within 3–6 hours; emergency relief for gas-stressed shrimp.', '100%丝兰提取物，3–6小时迅速降低氨氮，应急处理因有毒气体浮头。'),
    description: L('Hàm lượng saponin cao giúp liên kết và trung hòa amoniac tự do. Dạng lỏng hòa tan hoàn toàn, tác dụng nhanh, an toàn cho cả ao ương và ao nuôi mật độ cao.', 'High saponin content binds and neutralises free ammonia. Fully soluble liquid acting fast, safe for nursery and high-density ponds.', '高皂苷含量结合并中和游离氨，液体完全溶解，作用快速，适用于苗种池与高密度养殖池。'),
    composition: L('Chiết xuất Yucca schidigera 100% (saponin ≥ 10%).', 'Yucca schidigera extract 100% (saponin ≥ 10%).', '丝兰提取物100%（皂苷≥10%）。'),
    usage: L('Giảm nhanh khí độc NH₃, H₂S; cấp cứu khi tôm cá nổi đầu.', 'Rapid reduction of NH₃ and H₂S; emergency use when animals gasp at the surface.', '快速降低氨氮与硫化氢；虾鱼浮头时应急使用。'),
    dosage: L('Định kỳ: 1 lít/3.000–4.000 m³.\nCấp cứu: 1 lít/1.500–2.000 m³, tạt khắp ao, mở quạt khí tối đa.', 'Routine: 1 L per 3,000–4,000 m³.\nEmergency: 1 L per 1,500–2,000 m³, spread evenly with full aeration.', '常规：每3,000–4,000 m³用1升。\n应急：每1,500–2,000 m³用1升，全池泼洒并开足增氧机。'),
    variants: v(['1 lít', 320000], ['5 lít', 1500000]),
  },
  {
    slug: 'tim-mineral-plus', sku: 'TST-MP', cat: 'khoang-vitamin', species: 'shrimp', color: '#b45309', badge: 'bestseller', featured: 1, rating: 4.8,
    name: L('TÍM MINERAL PLUS — Khoáng tạt ao tạo vỏ', 'TÍM MINERAL PLUS — Pond Mineral for Shell Formation', 'TÍM MINERAL PLUS — 泼洒矿物质助硬壳'),
    summary: L('Bổ sung Ca, Mg, K, Na cân bằng, giúp tôm lột xác đồng loạt, nhanh cứng vỏ, hạn chế cong thân đục cơ.', 'Balanced Ca, Mg, K and Na for synchronised moulting, fast shell hardening and fewer cramped/white-muscle cases.', '均衡补充钙、镁、钾、钠，蜕壳整齐、快速硬壳，减少弯体与白肌。'),
    description: L('Công thức khoáng được tính toán theo tỉ lệ Mg:Ca:K tối ưu cho tôm thẻ nuôi độ mặn thấp. Dạng bột mịn tan nhanh, không gây đục nước.', 'Mineral blend formulated at the optimal Mg:Ca:K ratio for whiteleg shrimp in low-salinity ponds. Fine powder dissolves quickly without clouding water.', '按低盐度南美白对虾最佳镁钙钾比例配方，细粉快速溶解，不浑水。'),
    composition: L('MgCl₂ 25%, CaCl₂ 18%, KCl 12%, NaHCO₃ 10%, MnSO₄, ZnSO₄, CuSO₄ vi lượng.', 'MgCl₂ 25%, CaCl₂ 18%, KCl 12%, NaHCO₃ 10%, trace MnSO₄, ZnSO₄, CuSO₄.', '氯化镁25%，氯化钙18%，氯化钾12%，碳酸氢钠10%，微量硫酸锰、硫酸锌、硫酸铜。'),
    usage: L('Bổ sung khoáng chất cho ao nuôi tôm, đặc biệt ao độ mặn thấp và giai đoạn tôm lột xác.', 'Mineral supplementation for shrimp ponds, particularly low salinity and moulting periods.', '用于虾池矿物质补充，尤其是低盐度及蜕壳期。'),
    dosage: L('Định kỳ: 2–3 kg/1.000 m³, 5–7 ngày/lần, tạt vào 21–22 giờ.\nTôm lột xác: 4–5 kg/1.000 m³.', 'Routine: 2–3 kg per 1,000 m³ every 5–7 days, applied at 9–10 pm.\nDuring moulting: 4–5 kg per 1,000 m³.', '常规：每1,000 m³用2–3 kg，5–7天一次，晚上21–22点泼洒。\n蜕壳期：每1,000 m³用4–5 kg。'),
    variants: v(['5 kg', 340000], ['Bao 25 kg', 1580000]),
  },
  {
    slug: 'tim-c-1000', sku: 'TST-C1K', cat: 'khoang-vitamin', species: 'all', color: '#ea580c', badge: null, featured: 0, rating: 4.7,
    name: L('TÍM C-1000 — Vitamin C bọc 35%', 'TÍM C-1000 — Coated Vitamin C 35%', 'TÍM C-1000 — 包膜维生素C 35%'),
    summary: L('Vitamin C bọc bền nhiệt, tăng sức đề kháng, chống sốc khi thay đổi thời tiết, môi trường.', 'Heat-stable coated vitamin C — boosts resistance and reduces stress from weather or environmental changes.', '耐热包膜维生素C，增强抵抗力，抗天气与环境变化应激。'),
    description: L('Công nghệ bọc giúp vitamin C không bị oxy hóa khi trộn thức ăn và tan dần trong đường ruột, nâng hiệu quả hấp thu lên đến 3 lần so với vitamin C thường.', 'Coating protects vitamin C from oxidation in feed and releases it gradually in the gut — up to 3× the absorption of regular vitamin C.', '包膜技术防止维生素C在拌料时氧化，并在肠道中缓释，吸收率可达普通维生素C的3倍。'),
    composition: L('Vitamin C (L-ascorbyl-2-polyphosphate) 35%. Tá dược vừa đủ 1 kg.', 'Vitamin C (L-ascorbyl-2-polyphosphate) 35%. Excipient q.s. 1 kg.', '维生素C（L-抗坏血酸-2-多聚磷酸酯）35%，辅料加至1 kg。'),
    usage: L('Tăng đề kháng, chống sốc, hỗ trợ phục hồi sau bệnh.', 'Immunity support, stress relief, post-disease recovery.', '增强抵抗力，抗应激，病后恢复。'),
    dosage: L('Trộn thức ăn: 3–5 g/kg thức ăn.\nTạt ao khi thời tiết thay đổi: 1 kg/3.000 m³.', 'Feed: 3–5 g per kg feed.\nPond application during weather changes: 1 kg per 3,000 m³.', '拌料：每公斤饲料3–5 g。\n天气变化时泼洒：每3,000 m³用1 kg。'),
    variants: v(['1 kg', 290000], ['5 kg', 1350000]),
  },
  {
    slug: 'tim-liver-guard', sku: 'TST-LG', cat: 'gan-ruot', species: 'shrimp', color: '#be123c', badge: 'new', featured: 1, rating: 4.9,
    name: L('TÍM LIVER GUARD — Bổ gan, giải độc gan tụy', 'TÍM LIVER GUARD — Hepatopancreas Protector', 'TÍM LIVER GUARD — 护肝解毒'),
    summary: L('Sorbitol, methionine, choline, inositol giúp gan tụy khỏe, màu sắc rõ, tăng chuyển hóa dinh dưỡng.', 'Sorbitol, methionine, choline and inositol keep the hepatopancreas healthy and boost nutrient metabolism.', '山梨醇、蛋氨酸、胆碱、肌醇，保护肝胰腺，促进营养代谢。'),
    description: L('Hỗ trợ chức năng gan tụy trong giai đoạn tôm ăn mạnh, sau khi dùng hóa chất xử lý ao hoặc khi gan có dấu hiệu sưng, nhạt màu. Dạng lỏng sánh dễ bám thức ăn.', 'Supports hepatopancreas function during heavy feeding, after chemical pond treatments or when the gland looks swollen or pale. Viscous liquid coats feed easily.', '在大量摄食期、池塘化学处理后或肝胰腺肿大发白时支持其功能。粘稠液体易于粘附饲料。'),
    composition: L('Sorbitol 20%, DL-Methionine 3%, Choline chloride 5%, Inositol 2%, Betaine 3%, Vitamin B12.', 'Sorbitol 20%, DL-Methionine 3%, Choline chloride 5%, Inositol 2%, Betaine 3%, Vitamin B12.', '山梨醇20%，DL-蛋氨酸3%，氯化胆碱5%，肌醇2%，甜菜碱3%，维生素B12。'),
    usage: L('Bổ gan, giải độc, tăng cường chức năng gan tụy cho tôm.', 'Liver support, detoxification and hepatopancreas function for shrimp.', '护肝、解毒，增强虾肝胰腺功能。'),
    dosage: L('Phòng: 5 ml/kg thức ăn, 3 ngày/tuần.\nHỗ trợ: 10 ml/kg thức ăn, liên tục 5–7 ngày.', 'Prevention: 5 ml per kg feed, 3 days/week.\nSupport: 10 ml per kg feed for 5–7 days.', '预防：每公斤饲料5 ml，每周3天。\n辅助：每公斤饲料10 ml，连用5–7天。'),
    variants: v(['1 lít', 395000], ['5 lít', 1850000]),
  },
  {
    slug: 'tim-herba-gut', sku: 'TST-HG', cat: 'thao-duoc', species: 'shrimp', color: '#4d7c0f', badge: 'new', featured: 1, rating: 4.8,
    name: L('TÍM HERBA-GUT — Thảo dược đường ruột', 'TÍM HERBA-GUT — Herbal Gut Formula', 'TÍM HERBA-GUT — 草本肠道配方'),
    summary: L('Allicin từ tỏi, chiết xuất xuyên tâm liên và cỏ mực — giải pháp thảo dược thay thế kháng sinh.', 'Garlic allicin, Andrographis and Eclipta extracts — a herbal alternative to antibiotics.', '大蒜素、穿心莲与墨旱莲提取物——替代抗生素的草本方案。'),
    description: L('Ức chế vi khuẩn gây hại đường ruột, giảm nguy cơ phân trắng, ruột rỗng. Không tồn dư, phù hợp vùng nuôi hướng đến xuất khẩu.', 'Inhibits harmful gut bacteria and reduces white-faeces and empty-gut risk. Residue-free — suitable for export-oriented farms.', '抑制肠道有害菌，降低白便与空肠风险。无残留，适合出口型养殖区。'),
    composition: L('Allicin 5%, chiết xuất Andrographis paniculata 10%, chiết xuất Eclipta alba 5%, Berberine 2%.', 'Allicin 5%, Andrographis paniculata extract 10%, Eclipta alba extract 5%, Berberine 2%.', '大蒜素5%，穿心莲提取物10%，墨旱莲提取物5%，小檗碱2%。'),
    usage: L('Phòng ngừa và hỗ trợ các vấn đề đường ruột trên tôm.', 'Prevention and support for shrimp gut problems.', '预防与辅助解决虾肠道问题。'),
    dosage: L('Phòng: 3 g/kg thức ăn, 2 cữ/ngày.\nHỗ trợ: 5–8 g/kg thức ăn, 5–7 ngày liên tục.', 'Prevention: 3 g per kg feed, 2 meals/day.\nSupport: 5–8 g per kg feed for 5–7 days.', '预防：每公斤饲料3 g，每天2餐。\n辅助：每公斤饲料5–8 g，连用5–7天。'),
    variants: v(['500 g', 245000], ['1 kg', 450000]),
  },
  {
    slug: 'tim-iodine-90', sku: 'TST-ID90', cat: 'sat-trung', species: 'all', color: '#9a3412', badge: null, featured: 0, rating: 4.6,
    name: L('TÍM IODINE 90 — Iodine phức hợp sát trùng', 'TÍM IODINE 90 — Complex Iodine Disinfectant', 'TÍM IODINE 90 — 复合碘消毒剂'),
    summary: L('Iodine phức hợp ổn định, diệt khuẩn, virus, nấm trong nước; ít ảnh hưởng tảo có lợi.', 'Stable complex iodine — kills bacteria, viruses and fungi in water with minimal effect on beneficial algae.', '稳定复合碘，杀灭水中细菌、病毒与真菌，对有益藻影响小。'),
    description: L('Dùng sát trùng nguồn nước trước khi thả giống, định kỳ trong quá trình nuôi hoặc khi có dịch bệnh xung quanh vùng nuôi.', 'For disinfecting intake water before stocking, routinely during culture or when disease outbreaks occur nearby.', '用于放苗前水源消毒、养殖期间定期消毒或周边发生疫病时。'),
    composition: L('Povidone Iodine 90% (iod hữu hiệu ≥ 9%).', 'Povidone Iodine 90% (available iodine ≥ 9%).', '聚维酮碘90%（有效碘≥9%）。'),
    usage: L('Sát trùng nước ao nuôi, dụng cụ, bể ương.', 'Disinfection of pond water, equipment and nursery tanks.', '池水、工具与育苗池消毒。'),
    dosage: L('Định kỳ: 1 lít/3.000–4.000 m³, 7–10 ngày/lần, tạt lúc 8–9 giờ sáng.\nKhông dùng chung với men vi sinh; cách tối thiểu 48 giờ.', 'Routine: 1 L per 3,000–4,000 m³ every 7–10 days at 8–9 am.\nDo not combine with probiotics; wait at least 48 h.', '常规：每3,000–4,000 m³用1升，7–10天一次，上午8–9点泼洒。\n勿与益生菌同用，间隔至少48小时。'),
    variants: v(['1 lít', 310000], ['Can 5 lít', 1450000]),
  },
  {
    slug: 'tim-bkc-80', sku: 'TST-BKC', cat: 'sat-trung', species: 'all', color: '#7e22ce', badge: null, featured: 0, rating: 4.6,
    name: L('TÍM BKC 80 — Benzalkonium Chloride 80%', 'TÍM BKC 80 — Benzalkonium Chloride 80%', 'TÍM BKC 80 — 苯扎氯铵80%'),
    summary: L('Sát trùng phổ rộng, diệt khuẩn và nguyên sinh động vật, xử lý nước và cắt tảo.', 'Broad-spectrum disinfectant for bacteria and protozoa, water treatment and algae control.', '广谱消毒，杀灭细菌与原生动物，处理水质与控藻。'),
    description: L('Hoạt chất BKC nồng độ cao, phân hủy sinh học, hiệu quả trong cả nước ngọt và nước mặn.', 'High-concentration, biodegradable BKC effective in both fresh and brackish water.', '高浓度可生物降解苯扎氯铵，淡水和咸水均有效。'),
    composition: L('Benzalkonium Chloride 80%.', 'Benzalkonium Chloride 80%.', '苯扎氯铵80%。'),
    usage: L('Sát trùng nước, xử lý ký sinh trùng ngoại thân, cắt tảo.', 'Water disinfection, external parasite control, algae reduction.', '水体消毒，处理体表寄生虫，控藻。'),
    dosage: L('1 lít/4.000–5.000 m³ nước. Tạt vào buổi sáng, mở quạt khí liên tục.', '1 L per 4,000–5,000 m³. Apply in the morning with continuous aeration.', '每4,000–5,000 m³用1升，上午泼洒，持续增氧。'),
    variants: v(['1 lít', 275000], ['Can 5 lít', 1290000]),
  },
  {
    slug: 'tim-fish-immune', sku: 'TST-FI', cat: 'gan-ruot', species: 'fish', color: '#0369a1', badge: 'premium', featured: 1, rating: 4.8,
    name: L('TÍM FISH-IMMUNE — Beta-glucan miễn dịch cho cá', 'TÍM FISH-IMMUNE — Beta-glucan Immunity for Fish', 'TÍM FISH-IMMUNE — 鱼用β-葡聚糖免疫增强'),
    summary: L('Beta-glucan 1,3/1,6 + vitamin E, selen — tăng miễn dịch tự nhiên cho cá tra, cá rô phi, cá điêu hồng.', 'Beta-glucan 1,3/1,6 with vitamin E and selenium — natural immunity for pangasius, tilapia and red tilapia.', 'β-1,3/1,6-葡聚糖+维生素E、硒——增强巴沙鱼、罗非鱼、红罗非鱼的天然免疫。'),
    description: L('Kích hoạt đại thực bào và hệ miễn dịch không đặc hiệu, giúp cá vượt qua các giai đoạn nhạy cảm như chuyển mùa, sang ao, tăng mật độ.', 'Activates macrophages and innate immunity, helping fish through sensitive periods such as seasonal change, transfers and higher densities.', '激活巨噬细胞与非特异性免疫，帮助鱼类度过换季、转池、提高密度等敏感时期。'),
    composition: L('Beta-glucan 1,3/1,6 ≥ 30%, Vitamin E 5%, Selen hữu cơ 0,1%, MOS 10%.', 'Beta-glucan 1,3/1,6 ≥ 30%, Vitamin E 5%, Organic selenium 0.1%, MOS 10%.', 'β-1,3/1,6-葡聚糖≥30%，维生素E 5%，有机硒0.1%，甘露寡糖10%。'),
    usage: L('Tăng miễn dịch, giảm hao hụt cho cá nuôi thương phẩm và cá giống.', 'Immunity and survival support for grow-out and fingerling fish.', '增强免疫，降低商品鱼与鱼苗损耗。'),
    dosage: L('Phòng: 2–3 g/kg thức ăn, 7 ngày/tháng.\nGiai đoạn nhạy cảm: 5 g/kg thức ăn, 10 ngày liên tục.', 'Prevention: 2–3 g per kg feed, 7 days/month.\nSensitive periods: 5 g per kg feed for 10 days.', '预防：每公斤饲料2–3 g，每月7天。\n敏感期：每公斤饲料5 g，连用10天。'),
    variants: v(['1 kg', 480000], ['5 kg', 2250000]),
  },
  {
    slug: 'tim-do-oxy', sku: 'TST-OXY', cat: 'sat-trung', species: 'all', color: '#0891b2', badge: null, featured: 0, rating: 4.7,
    name: L('TÍM DO-OXY — Oxy viên cấp cứu', 'TÍM DO-OXY — Emergency Oxygen Tablets', 'TÍM DO-OXY — 应急增氧片'),
    summary: L('Giải phóng oxy hòa tan ngay ở tầng đáy, cấp cứu tôm cá nổi đầu do thiếu oxy, cúp điện.', 'Releases dissolved oxygen at the bottom layer — emergency relief for gasping animals or power outages.', '在底层迅速释放溶解氧，应急解决缺氧浮头或停电。'),
    description: L('Viên nén chìm, giải phóng oxy từ từ trong 6–8 giờ, đồng thời oxy hóa khí độc tầng đáy.', 'Sinking tablets release oxygen gradually over 6–8 hours while oxidising bottom toxic gases.', '沉底片剂，6–8小时缓慢释放氧气，同时氧化底层有毒气体。'),
    composition: L('Sodium percarbonate 2Na₂CO₃·3H₂O₂ ≥ 98%.', 'Sodium percarbonate 2Na₂CO₃·3H₂O₂ ≥ 98%.', '过碳酸钠2Na₂CO₃·3H₂O₂≥98%。'),
    usage: L('Cấp cứu thiếu oxy, cải thiện oxy tầng đáy.', 'Emergency oxygen supply and bottom-layer oxygenation.', '应急增氧，改善底层溶氧。'),
    dosage: L('Định kỳ: 1–2 kg/1.000 m³ ban đêm.\nCấp cứu: 3–5 kg/1.000 m³, rải đều khu vực tôm cá tập trung.', 'Routine: 1–2 kg per 1,000 m³ at night.\nEmergency: 3–5 kg per 1,000 m³, spread where animals gather.', '常规：夜间每1,000 m³用1–2 kg。\n应急：每1,000 m³用3–5 kg，撒于虾鱼聚集处。'),
    variants: v(['1 kg', 120000], ['Xô 10 kg', 1050000]),
  },
];

const diseases = [
  {
    slug: 'hoai-tu-gan-tuy-cap-ahpnd', species: 'shrimp', severity: 'high', products: ['tim-pro-bio-9', 'tim-liver-guard', 'tim-herba-gut', 'tim-iodine-90'],
    name: L('Hoại tử gan tụy cấp (AHPND/EMS)', 'Acute Hepatopancreatic Necrosis Disease (AHPND/EMS)', '急性肝胰腺坏死病（AHPND/EMS）'),
    pathogen: L('Vibrio parahaemolyticus mang plasmid độc lực pirA/pirB', 'Vibrio parahaemolyticus carrying pirA/pirB toxin plasmid', '携带pirA/pirB毒素质粒的副溶血性弧菌'),
    symptoms: L('Tôm 10–35 ngày tuổi bỏ ăn, gan tụy teo, nhạt màu, khó bóp vỡ; ruột rỗng; tôm chết rải rác rồi tăng nhanh, có thể chết 70–100% trong vài ngày.', 'Shrimp aged 10–35 days stop feeding; hepatopancreas shrinks, turns pale and is hard to crush; empty gut; mortality starts scattered then rises sharply up to 70–100% within days.', '10–35日龄虾停食，肝胰腺萎缩、发白、难以捏碎；空肠；零星死亡后迅速增加，数天内死亡率可达70–100%。'),
    causes: L('Mật độ Vibrio cao trong nước và đáy ao; tảo tàn; đáy ao nhiều hữu cơ; con giống nhiễm khuẩn.', 'High Vibrio loads in water and sediment; algae crashes; organic-rich bottoms; infected post-larvae.', '水体与底泥弧菌密度高；倒藻；池底有机物多；苗种带菌。'),
    prevention: L('Chọn giống sạch bệnh (xét nghiệm PCR); sát trùng nước kỹ; duy trì men vi sinh định kỳ để kiểm soát Vibrio; bổ gan và quản lý thức ăn chặt chẽ trong 35 ngày đầu.', 'Use PCR-tested SPF post-larvae; disinfect water thoroughly; apply probiotics regularly to control Vibrio; support liver health and feed carefully during the first 35 days.', '选用PCR检测无病苗种；彻底消毒水体；定期使用益生菌控制弧菌；前35天护肝并严格管理投喂。'),
    treatment: L('Giảm 30–50% lượng thức ăn; sát trùng nước; tăng cường men vi sinh và bổ gan sau 48 giờ. Liên hệ kỹ thuật viên để được phác đồ cụ thể theo tình trạng ao.', 'Cut feed by 30–50%; disinfect the water; reinforce probiotics and liver support after 48 hours. Contact our technicians for a protocol tailored to your pond.', '减料30–50%；水体消毒；48小时后加强益生菌与护肝。请联系技术员获取针对池塘情况的具体方案。'),
  },
  {
    slug: 'dom-trang-wssv', species: 'shrimp', severity: 'high', products: ['tim-iodine-90', 'tim-c-1000', 'tim-mineral-plus'],
    name: L('Bệnh đốm trắng (WSSV)', 'White Spot Syndrome (WSSV)', '白斑综合征（WSSV）'),
    pathogen: L('Virus White Spot Syndrome Virus', 'White Spot Syndrome Virus', '白斑综合征病毒'),
    symptoms: L('Đốm trắng tròn trên vỏ đầu ngực và thân; tôm đỏ thân, lờ đờ dạt bờ; chết hàng loạt trong 3–10 ngày.', 'Round white spots on the carapace and body; reddish discolouration; lethargic shrimp at pond edges; mass mortality within 3–10 days.', '头胸甲及体表出现圆形白斑；体色发红，游动迟缓靠边；3–10天内大量死亡。'),
    causes: L('Lây qua giống nhiễm virus, vật chủ trung gian (cua, còng, giáp xác hoang), nguồn nước; bùng phát khi nhiệt độ thay đổi đột ngột.', 'Spread by infected seed, carriers (crabs, wild crustaceans) and water; outbreaks triggered by sudden temperature changes.', '通过带毒苗种、中间宿主（蟹类、野生甲壳类）及水源传播；温度骤变时暴发。'),
    prevention: L('An toàn sinh học: rào lưới chắn cua, ao lắng sát trùng, giống sạch bệnh; bổ sung vitamin C, khoáng để tăng sức chống chịu khi chuyển mùa.', 'Biosecurity: crab fences, disinfected reservoir ponds, SPF seed; vitamin C and minerals to strengthen resistance during seasonal changes.', '生物安保：设置防蟹网、蓄水池消毒、使用无病苗种；换季时补充维生素C与矿物质增强抵抗力。'),
    treatment: L('Hiện chưa có thuốc đặc trị virus. Khi phát hiện cần báo cơ quan thú y địa phương, cách ly và xử lý ao theo hướng dẫn; tuyệt đối không xả nước bệnh ra môi trường.', 'There is no cure for the virus. Report to local veterinary authorities, isolate and treat the pond as instructed; never discharge infected water.', '目前尚无特效药。发现后应报告当地兽医部门，隔离并按指导处理池塘；严禁排放病水。'),
  },
  {
    slug: 'phan-trang-wfd', species: 'shrimp', severity: 'medium', products: ['tim-herba-gut', 'tim-gut-zyme', 'tim-liver-guard'],
    name: L('Bệnh phân trắng (WFD)', 'White Faeces Disease (WFD)', '白便病（WFD）'),
    pathogen: L('Phức hợp Vibrio, trùng hai tế bào Gregarine, vi bào tử trùng', 'Complex of Vibrio, gregarine protozoa and microsporidia', '弧菌、簇虫及微孢子虫复合感染'),
    symptoms: L('Xuất hiện dải phân trắng nổi trên mặt nước và góc ao; ruột tôm trắng đục, đứt khúc; tôm giảm ăn, chậm lớn.', 'White faecal strings float on the surface and in corners; shrimp guts appear white and broken; reduced feeding and slow growth.', '水面及池角出现漂浮白便；虾肠道发白、断节；摄食减少，生长缓慢。'),
    causes: L('Thức ăn dư thừa, đáy ao bẩn, tảo độc, mật độ Vibrio cao trong đường ruột.', 'Overfeeding, dirty pond bottoms, toxic algae and high Vibrio levels in the gut.', '投喂过量、池底脏、有害藻类及肠道弧菌密度高。'),
    prevention: L('Quản lý thức ăn theo sàng; trộn men tiêu hóa và thảo dược định kỳ; giữ đáy sạch bằng vi sinh và zeolite.', 'Manage feeding by checking trays; routinely add digestive probiotics and herbals; keep bottoms clean with probiotics and zeolite.', '按料台管理投喂；定期拌入消化益生菌与草本；用益生菌和沸石保持池底清洁。'),
    treatment: L('Giảm thức ăn, trộn thảo dược đường ruột 5–7 ngày, sau đó trộn men tiêu hóa để phục hồi hệ vi sinh. Xử lý đáy và kiểm tra mật độ Vibrio.', 'Reduce feed, add herbal gut formula for 5–7 days, then digestive probiotics to restore gut flora. Treat the bottom and check Vibrio levels.', '减料，拌草本肠道配方5–7天，随后拌消化益生菌恢复肠道菌群。处理池底并检测弧菌密度。'),
  },
  {
    slug: 'vi-bao-tu-trung-ehp', species: 'shrimp', severity: 'medium', products: ['tim-gut-zyme', 'tim-liver-guard', 'tim-pro-bio-9'],
    name: L('Vi bào tử trùng (EHP)', 'Microsporidiosis (EHP)', '肝肠胞虫病（EHP）'),
    pathogen: L('Enterocytozoon hepatopenaei', 'Enterocytozoon hepatopenaei', '虾肝肠胞虫'),
    symptoms: L('Tôm chậm lớn, phân đàn nặng, tỉ lệ sống bình thường nhưng FCR cao; gan tụy nhạt màu.', 'Stunted growth and severe size variation; normal survival but high FCR; pale hepatopancreas.', '虾生长缓慢、规格差异大；成活率正常但饵料系数高；肝胰腺发白。'),
    causes: L('Bào tử tồn lưu trong đáy ao cũ, giống nhiễm bệnh, thức ăn tươi sống.', 'Spores persisting in old pond sediment, infected seed and live/fresh feeds.', '旧池底泥中残留孢子、苗种带病、投喂鲜活饵料。'),
    prevention: L('Cải tạo ao kỹ: phơi đáy, bón vôi CaO liều cao; xét nghiệm giống; không dùng thức ăn tươi sống.', 'Thorough pond preparation: sun-dry the bottom and apply high-dose quicklime; test seed; avoid fresh/live feed.', '彻底清塘：晒池并大剂量施用生石灰；检测苗种；不投喂鲜活饵料。'),
    treatment: L('Chưa có thuốc đặc trị. Tập trung hỗ trợ gan ruột, giảm mật độ, tối ưu thức ăn để tôm vẫn tăng trưởng.', 'No specific cure. Focus on liver and gut support, reduce density and optimise feeding to maintain growth.', '尚无特效药。重点护肝护肠、降低密度、优化投喂以维持生长。'),
  },
  {
    slug: 'mem-vo', species: 'shrimp', severity: 'low', products: ['tim-mineral-plus', 'tim-c-1000'],
    name: L('Tôm mềm vỏ, cong thân', 'Soft Shell & Muscle Cramp', '软壳与弯体'),
    pathogen: L('Không do mầm bệnh — rối loạn dinh dưỡng, khoáng', 'Non-infectious — nutritional and mineral imbalance', '非病原性——营养与矿物质失衡'),
    symptoms: L('Vỏ tôm mềm, mỏng kéo dài sau lột xác; thân cong, cơ đục trắng; tôm dễ bị ăn thịt lẫn nhau.', 'Shells stay soft and thin long after moulting; bent bodies with opaque white muscle; increased cannibalism.', '蜕壳后长时间软壳、薄壳；身体弯曲，肌肉发白；易互相残食。'),
    causes: L('Thiếu khoáng Ca, Mg, K trong nước, đặc biệt ao độ mặn thấp; pH, kiềm dao động mạnh.', 'Lack of Ca, Mg and K, especially in low-salinity ponds; large pH and alkalinity swings.', '水中缺乏钙、镁、钾，尤其低盐度池塘；pH与碱度波动大。'),
    prevention: L('Duy trì kiềm 120–160 mg/L; tạt khoáng định kỳ ban đêm; bổ sung khoáng và vitamin C vào thức ăn.', 'Keep alkalinity at 120–160 mg/L; apply minerals at night routinely; add minerals and vitamin C to feed.', '保持碱度120–160 mg/L；定期夜间泼洒矿物质；饲料中添加矿物质与维生素C。'),
    treatment: L('Tạt khoáng liều cao 2–3 đêm liên tục, trộn vitamin C; kiểm tra và nâng kiềm.', 'Apply high-dose minerals for 2–3 nights, add vitamin C to feed; test and raise alkalinity.', '连续2–3晚大剂量泼洒矿物质，拌维生素C；检测并提高碱度。'),
  },
  {
    slug: 'gan-than-mu-ca-tra', species: 'fish', severity: 'high', products: ['tim-fish-immune', 'tim-c-1000', 'tim-bkc-80'],
    name: L('Bệnh gan thận mủ trên cá tra', 'Bacillary Necrosis of Pangasius (BNP)', '巴沙鱼肝肾脓肿病（BNP）'),
    pathogen: L('Vi khuẩn Edwardsiella ictaluri', 'Edwardsiella ictaluri bacteria', '鮰爱德华氏菌'),
    symptoms: L('Cá bỏ ăn, bơi lờ đờ; gan, thận, tỳ tạng có nhiều đốm trắng (mủ) đường kính 1–3 mm; chết rải rác đến hàng loạt.', 'Fish stop feeding and swim lethargically; liver, kidney and spleen show many 1–3 mm white (pus) spots; scattered to mass mortality.', '鱼停食、游动迟缓；肝、肾、脾出现大量1–3 mm白色脓点；零星至大量死亡。'),
    causes: L('Mùa nước lũ, nhiệt độ 25–28°C, mật độ cao, chất lượng nước kém.', 'Flood season, temperatures of 25–28°C, high stocking density and poor water quality.', '洪水季节，水温25–28°C，高密度及水质差。'),
    prevention: L('Tăng miễn dịch bằng beta-glucan và vitamin C trước mùa bệnh; sát trùng nước định kỳ; thu gom cá chết.', 'Boost immunity with beta-glucan and vitamin C before the disease season; disinfect water routinely; remove dead fish.', '发病季节前用β-葡聚糖与维生素C增强免疫；定期消毒水体；及时清除死鱼。'),
    treatment: L('Điều trị cần có chẩn đoán và kê đơn của bác sĩ thú y thủy sản (kháng sinh đồ). Song song: sát trùng nước, tăng cường miễn dịch.', 'Treatment requires diagnosis and prescription by an aquatic veterinarian (antibiogram). In parallel: disinfect water and support immunity.', '治疗需经水产兽医诊断开具处方（药敏试验）。同时：消毒水体，增强免疫。'),
  },
  {
    slug: 'xuat-huyet-ca', species: 'fish', severity: 'medium', products: ['tim-fish-immune', 'tim-iodine-90', 'tim-pro-bio-9'],
    name: L('Bệnh xuất huyết trên cá', 'Haemorrhagic Septicaemia in Fish', '鱼类出血病'),
    pathogen: L('Aeromonas hydrophila', 'Aeromonas hydrophila', '嗜水气单胞菌'),
    symptoms: L('Xuất huyết đốm đỏ trên thân, gốc vây, hậu môn; bụng chướng chứa dịch; mắt lồi.', 'Red haemorrhagic spots on the body, fin bases and vent; distended belly with fluid; exophthalmia.', '体表、鳍基、肛门出现红色出血点；腹部膨胀积水；眼球突出。'),
    causes: L('Môi trường ô nhiễm hữu cơ, cá bị xây xát khi vận chuyển, thay đổi nhiệt độ.', 'Organic pollution, handling injuries during transport and temperature changes.', '有机污染，运输擦伤，温度变化。'),
    prevention: L('Giữ môi trường sạch bằng men vi sinh; sát trùng sau khi vận chuyển, san cá; tăng miễn dịch định kỳ.', 'Keep water clean with probiotics; disinfect after transport or grading; boost immunity regularly.', '用益生菌保持水质清洁；运输或分池后消毒；定期增强免疫。'),
    treatment: L('Sát trùng nước, tăng miễn dịch. Trường hợp nặng cần bác sĩ thú y kê đơn.', 'Disinfect water and support immunity. Severe cases require a veterinary prescription.', '水体消毒，增强免疫。严重时需兽医开具处方。'),
  },
  {
    slug: 'khi-doc-nh3-no2', species: 'all', severity: 'medium', products: ['tim-yucca-max', 'tim-zeo-clear', 'tim-do-oxy', 'tim-pro-bio-9'],
    name: L('Ngộ độc khí độc NH₃, NO₂, H₂S', 'Toxic Gas Poisoning (NH₃, NO₂, H₂S)', '有毒气体中毒（氨氮、亚硝酸盐、硫化氢）'),
    pathogen: L('Không do mầm bệnh — yếu tố môi trường', 'Non-infectious — environmental factor', '非病原性——环境因素'),
    symptoms: L('Tôm cá nổi đầu vào sáng sớm, mang đen/nâu, bỏ ăn; tôm yếu, lột xác kéo dài.', 'Animals gasp at dawn, gills turn black/brown, stop feeding; weak shrimp with prolonged moulting.', '清晨浮头，鳃发黑/褐，停食；虾体虚弱，蜕壳延迟。'),
    causes: L('Tích tụ chất hữu cơ từ thức ăn dư, phân, tảo tàn; thiếu oxy tầng đáy; mưa lớn.', 'Organic build-up from uneaten feed, faeces and dead algae; low bottom oxygen; heavy rain.', '残饵、粪便、死藻累积有机物；底层缺氧；大雨。'),
    prevention: L('Định kỳ men vi sinh và zeolite; quản lý thức ăn; đảm bảo oxy hòa tan > 5 mg/L.', 'Routine probiotics and zeolite; feed management; keep dissolved oxygen above 5 mg/L.', '定期使用益生菌与沸石；管理投喂；保持溶解氧>5 mg/L。'),
    treatment: L('Cấp cứu: Yucca + oxy viên, mở quạt khí tối đa, giảm 50% thức ăn; sau 24 giờ dùng men vi sinh xử lý đáy.', 'Emergency: Yucca + oxygen tablets, full aeration, cut feed by 50%; after 24 h, use probiotics to treat the bottom.', '应急：丝兰+增氧片，开足增氧机，减料50%；24小时后用益生菌处理池底。'),
  },
];

const P = (vi, en, zh) => L(vi, en, zh);

const posts = [
  {
    slug: 'quy-trinh-chuan-bi-ao-nuoi-tom-the-7-buoc', topic: 'technique', read: 7, daysAgo: 3,
    title: P('Quy trình chuẩn bị ao nuôi tôm thẻ chân trắng: 7 bước nền tảng', 'Preparing a Whiteleg Shrimp Pond: 7 Essential Steps', '南美白对虾池塘准备：7个基础步骤'),
    excerpt: P('80% thành công của vụ nuôi được quyết định trước khi thả giống. Đây là quy trình chuẩn bị ao mà đội ngũ kỹ thuật Thủy Sản Tím áp dụng tại hơn 2.000 ao nuôi.', '80% of a crop’s success is decided before stocking. This is the pond-preparation protocol our technical team applies across 2,000+ ponds.', '养殖成功的80%在放苗前就已决定。这是我们技术团队在2,000多口池塘中采用的准备流程。'),
    body: P(
`## 1. Tháo cạn, nạo vét và phơi đáy
Tháo cạn nước, nạo vét bùn đen. Phơi đáy 7–15 ngày đến khi nứt chân chim. Với ao bạt, vệ sinh và phơi khô bạt.

## 2. Bón vôi cải tạo
Bón CaO 1–1,5 tấn/ha cho ao đất có pH thấp, hoặc CaCO₃ cho ao đã ổn định pH.

## 3. Lấy nước qua túi lọc
Lấy nước vào ao lắng qua túi lọc 2 lớp để loại trứng, ấu trùng giáp xác và cá tạp.

## 4. Diệt khuẩn và giáp xác
Sát trùng nước bằng iodine hoặc chlorine theo hướng dẫn. Chờ hết dư lượng hóa chất trước khi bước sang bước 5.

## 5. Gây màu nước bằng vi sinh
Ủ **TÍM PRO-BIO 9** với mật rỉ đường, tạt liên tục 3 ngày để tạo hệ vi sinh có lợi và màu nước xanh vỏ đỗ hoặc nâu nhạt.

## 6. Bổ sung khoáng
Bổ sung khoáng để đạt kiềm 120–160 mg/L, đặc biệt quan trọng với ao độ mặn thấp.

## 7. Kiểm tra trước khi thả
Đo pH (7,5–8,5), kiềm, độ mặn, oxy hòa tan; thả thử 50 con giống vào giai 24 giờ trước khi thả đại trà.

> Cần tư vấn phác đồ cho ao của bạn? Gọi hotline để được kỹ thuật viên hỗ trợ miễn phí.`,
`## 1. Drain, remove sludge and sun-dry
Drain the pond and remove black sludge. Sun-dry for 7–15 days until the soil cracks. For lined ponds, clean and dry the liner.

## 2. Apply lime
Apply quicklime (CaO) at 1–1.5 t/ha for acidic earthen ponds, or agricultural lime (CaCO₃) where pH is stable.

## 3. Fill through filter bags
Fill the reservoir through double-layer filter bags to exclude eggs, crustacean larvae and trash fish.

## 4. Disinfect
Disinfect with iodine or chlorine as instructed, and wait for residues to clear before step 5.

## 5. Build water colour with probiotics
Activate **TÍM PRO-BIO 9** with molasses and apply for 3 consecutive days to establish beneficial flora and a light green or brown colour.

## 6. Add minerals
Bring alkalinity to 120–160 mg/L — crucial in low-salinity ponds.

## 7. Final checks
Check pH (7.5–8.5), alkalinity, salinity and DO; test 50 post-larvae in a hapa for 24 hours before full stocking.`,
`## 1. 排干、清淤、晒池
排干池水，清除黑泥，晒池7–15天至土壤龟裂。铺膜池需清洗并晾干。

## 2. 施石灰
酸性土池施生石灰1–1.5吨/公顷；pH稳定的池塘施碳酸钙。

## 3. 过滤进水
经双层滤袋进水至蓄水池，阻挡卵、甲壳类幼体和野杂鱼。

## 4. 消毒
按说明使用碘或氯消毒，待残留消失后再进行第5步。

## 5. 益生菌肥水
用糖蜜活化 **TÍM PRO-BIO 9**，连续泼洒3天，建立有益菌群并形成浅绿或浅褐色水色。

## 6. 补充矿物质
将碱度提高至120–160 mg/L，低盐度池塘尤为重要。

## 7. 放苗前检查
检测pH（7.5–8.5）、碱度、盐度和溶氧；放苗前先将50尾苗放入网箱试养24小时。`),
  },
  {
    slug: 'quan-ly-khi-doc-ao-nuoi-mua-mua', topic: 'technique', read: 6, daysAgo: 10,
    title: P('Quản lý khí độc NH₃, NO₂, H₂S trong ao nuôi mùa mưa', 'Managing NH₃, NO₂ and H₂S in Ponds During the Rainy Season', '雨季池塘氨氮、亚硝酸盐和硫化氢管理'),
    excerpt: P('Mưa lớn làm tảo tàn, pH tụt và khí độc tăng vọt chỉ sau một đêm. Cách nhận biết sớm và xử lý đúng thứ tự.', 'Heavy rain crashes algae, drops pH and spikes toxic gases overnight. How to detect early and respond in the right order.', '大雨导致倒藻、pH下降，有毒气体一夜飙升。如何及早发现并按正确顺序处理。'),
    body: P(
`Mùa mưa là thời điểm khí độc dễ bùng phát nhất. Nước mưa làm giảm pH, kiềm và nhiệt độ đột ngột khiến tảo tàn, chất hữu cơ phân hủy yếm khí ở đáy ao.

## Dấu hiệu nhận biết
- Tôm nổi đầu, dạt bờ vào sáng sớm
- Mang tôm chuyển màu đen hoặc nâu
- Sàng ăn giảm đột ngột

## Thứ tự xử lý
1. **Cấp cứu oxy**: mở toàn bộ quạt khí, rải **TÍM DO-OXY** tại khu vực tôm tập trung.
2. **Cắt khí độc**: tạt **TÍM YUCCA MAX** 1 lít/1.500 m³.
3. **Ổn định pH và kiềm**: bổ sung khoáng, vôi CaCO₃.
4. **Xử lý gốc**: sau 24 giờ, dùng men vi sinh và zeolite để phân hủy hữu cơ đáy ao.

## Phòng ngừa
Rải vôi quanh bờ trước cơn mưa, giảm 20–30% thức ăn trong ngày mưa và duy trì men vi sinh định kỳ.`,
`The rainy season is when toxic gases spike most easily. Rain suddenly lowers pH, alkalinity and temperature, crashing algae and driving anaerobic decomposition at the bottom.

## Warning signs
- Shrimp gasp at the surface or gather at the edges at dawn
- Gills turn black or brown
- Feed-tray consumption drops suddenly

## Response order
1. **Oxygen first**: run all aerators and spread **TÍM DO-OXY** where shrimp gather.
2. **Cut toxic gases**: apply **TÍM YUCCA MAX** at 1 L per 1,500 m³.
3. **Stabilise pH and alkalinity**: minerals and agricultural lime.
4. **Fix the root cause**: after 24 h, apply probiotics and zeolite to break down bottom organics.`,
`雨季是有毒气体最易暴发的时期。雨水使pH、碱度和水温骤降，导致倒藻，池底有机物厌氧分解。

## 识别征兆
- 清晨虾浮头、靠边
- 鳃变黑或变褐
- 料台摄食突然下降

## 处理顺序
1. **先增氧**：开启全部增氧机，在虾聚集处撒 **TÍM DO-OXY**。
2. **降毒气**：每1,500 m³泼洒 **TÍM YUCCA MAX** 1升。
3. **稳定pH与碱度**：补充矿物质与碳酸钙。
4. **治本**：24小时后使用益生菌与沸石分解池底有机物。`),
  },
  {
    slug: 'dung-men-vi-sinh-dung-cach', topic: 'technique', read: 5, daysAgo: 18,
    title: P('Dùng men vi sinh đúng cách: 5 sai lầm khiến hiệu quả giảm một nửa', 'Using Probiotics Right: 5 Mistakes That Halve Their Effect', '正确使用益生菌：5个让效果减半的错误'),
    excerpt: P('Cùng một sản phẩm, có ao hiệu quả rõ rệt, có ao gần như không thay đổi. Nguyên nhân thường nằm ở cách sử dụng.', 'The same product works wonders in one pond and barely at all in another. The difference is usually how it is used.', '同一产品，有的池塘效果显著，有的几乎无变化，原因通常在于使用方法。'),
    body: P(
`## 1. Dùng chung với hóa chất sát trùng
Vi sinh sẽ bị tiêu diệt. Hãy cách tối thiểu 48 giờ sau khi dùng iodine, BKC hoặc chlorine.

## 2. Không ủ kích hoạt
Ủ với mật rỉ đường 6–8 giờ có sục khí giúp bào tử nảy mầm, tăng mật độ vi sinh gấp nhiều lần.

## 3. Tạt khi oxy thấp
Vi sinh hiếu khí cần oxy. Tạt vào buổi sáng 8–10 giờ và chạy quạt khí.

## 4. Dùng không đều đặn
Hệ vi sinh cần được duy trì định kỳ 5–7 ngày/lần, không chỉ dùng khi nước đã xấu.

## 5. Sai liều theo thể tích
Tính theo **m³ nước** (diện tích × độ sâu), không chỉ theo diện tích mặt ao.`,
`## 1. Mixing with disinfectants
Disinfectants kill probiotics. Wait at least 48 hours after iodine, BKC or chlorine.

## 2. Skipping activation
Activating with molasses for 6–8 hours under aeration germinates spores and multiplies counts.

## 3. Applying when oxygen is low
Aerobic strains need oxygen. Apply at 8–10 am with aerators running.

## 4. Irregular use
Maintain the microbial community every 5–7 days — not only when water quality has already dropped.

## 5. Dosing by area instead of volume
Calculate by **cubic metres** (area × depth), not surface area alone.`,
`## 1. 与消毒剂同用
消毒剂会杀死益生菌。使用碘、苯扎氯铵或氯后至少间隔48小时。

## 2. 不活化
用糖蜜充气活化6–8小时可使芽孢萌发，菌数成倍增加。

## 3. 低氧时泼洒
好氧菌需要氧气，应在上午8–10点泼洒并开启增氧机。

## 4. 不定期使用
应每5–7天维持一次，而非等水质变差才使用。

## 5. 按面积而非体积计量
应按 **立方米**（面积×水深）计算用量。`),
  },
  {
    slug: 'phong-benh-phan-trang-tu-duong-ruot', topic: 'disease', read: 6, daysAgo: 25,
    title: P('Phòng bệnh phân trắng: tiếp cận từ sức khỏe đường ruột', 'Preventing White Faeces Disease Through Gut Health', '从肠道健康入手预防白便病'),
    excerpt: P('Phân trắng không chỉ là bệnh của nước mà là bệnh của đường ruột. Chiến lược 3 lớp: thảo dược – men tiêu hóa – bổ gan.', 'White faeces is a gut problem as much as a water problem. A 3-layer strategy: herbals, digestive probiotics and liver support.', '白便不仅是水质问题，更是肠道问题。三层策略：草本—消化益生菌—护肝。'),
    body: P(
`Bệnh phân trắng thường xuất hiện từ ngày 45–70, khi lượng thức ăn lớn và đáy ao bắt đầu tích tụ hữu cơ.

## Lớp 1 — Thảo dược ức chế mầm bệnh
**TÍM HERBA-GUT** 3 g/kg thức ăn, 3 ngày/tuần giúp ức chế Vibrio trong ruột mà không gây tồn dư.

## Lớp 2 — Men tiêu hóa tái tạo hệ vi sinh
**TÍM GUT-ZYME** hằng ngày giúp ruột đầy, phân chắc.

## Lớp 3 — Bổ gan
Gan tụy khỏe là nền tảng miễn dịch của tôm. Dùng **TÍM LIVER GUARD** 3 ngày/tuần.

Kết hợp với quản lý thức ăn theo sàng và xử lý đáy định kỳ, tỉ lệ ao xuất hiện phân trắng giảm đáng kể.`,
`White faeces typically appears from day 45–70, when feed volumes are high and organic matter starts building up.

## Layer 1 — Herbal pathogen control
**TÍM HERBA-GUT** at 3 g/kg feed, 3 days a week, suppresses gut Vibrio without residues.

## Layer 2 — Digestive probiotics
Daily **TÍM GUT-ZYME** keeps guts full and faeces firm.

## Layer 3 — Liver support
A healthy hepatopancreas is the foundation of shrimp immunity. Use **TÍM LIVER GUARD** 3 days a week.`,
`白便病通常在第45–70天出现，此时投喂量大，池底开始累积有机物。

## 第一层——草本抑菌
**TÍM HERBA-GUT** 每公斤饲料3 g，每周3天，抑制肠道弧菌且无残留。

## 第二层——消化益生菌
每日使用 **TÍM GUT-ZYME**，肠道饱满、粪便成形。

## 第三层——护肝
健康的肝胰腺是虾免疫的基础。每周3天使用 **TÍM LIVER GUARD**。`),
  },
  {
    slug: 'thuy-san-tim-khanh-thanh-phong-lab-vi-sinh', topic: 'news', read: 3, daysAgo: 33,
    title: P('Thủy Sản Tím đưa vào hoạt động phòng Lab vi sinh và PCR mới', 'Thủy Sản Tím Opens New Microbiology & PCR Laboratory', 'Thủy Sản Tím 新微生物与PCR实验室投入使用'),
    excerpt: P('Phòng Lab hỗ trợ bà con xét nghiệm nhanh mẫu nước, mẫu tôm và tư vấn phác đồ trong 24 giờ.', 'The lab offers farmers rapid water and shrimp testing with protocol advice within 24 hours.', '实验室为养殖户提供水样与虾样快速检测，并在24小时内提供方案建议。'),
    body: P(
`Phòng Lab mới được trang bị hệ thống PCR định lượng, tủ an toàn sinh học cấp II và khu nuôi cấy vi sinh.

## Dịch vụ cho khách hàng
- Đếm mật độ Vibrio tổng số, Vibrio xanh/vàng
- Xét nghiệm PCR: WSSV, AHPND, EHP
- Phân tích chỉ tiêu nước: NH₃, NO₂, kiềm, khoáng

Khách hàng và đại lý của Thủy Sản Tím được **ưu đãi phí xét nghiệm** và nhận kết quả kèm tư vấn kỹ thuật trong 24 giờ.`,
`The new lab is equipped with quantitative PCR, a class II biosafety cabinet and a microbial culture area.

## Services
- Total Vibrio and green/yellow colony counts
- PCR testing: WSSV, AHPND, EHP
- Water analysis: NH₃, NO₂, alkalinity, minerals

Customers and dealers receive **preferential testing fees** and results with technical advice within 24 hours.`,
`新实验室配备定量PCR系统、II级生物安全柜和微生物培养区。

## 服务项目
- 弧菌总数及绿/黄菌落计数
- PCR检测：WSSV、AHPND、EHP
- 水质分析：氨氮、亚硝酸盐、碱度、矿物质

客户与经销商可享受 **优惠检测费**，24小时内获得结果及技术建议。`),
  },
  {
    slug: 'nuoi-ca-tra-mat-do-cao-kiem-soat-gan-than-mu', topic: 'disease', read: 6, daysAgo: 41,
    title: P('Nuôi cá tra mật độ cao: kiểm soát bệnh gan thận mủ', 'High-Density Pangasius Farming: Controlling BNP', '高密度巴沙鱼养殖：控制肝肾脓肿病'),
    excerpt: P('Chủ động tăng miễn dịch trước mùa lũ là chìa khóa giảm hao hụt do Edwardsiella ictaluri.', 'Boosting immunity before the flood season is key to reducing losses from Edwardsiella ictaluri.', '在洪水季节前主动增强免疫是减少鮰爱德华氏菌损失的关键。'),
    body: P(
`Bệnh gan thận mủ gây thiệt hại lớn cho người nuôi cá tra vùng Đồng bằng sông Cửu Long, đặc biệt từ tháng 7 đến tháng 11.

## Chiến lược phòng bệnh
- **Trước mùa bệnh 2–3 tuần**: trộn **TÍM FISH-IMMUNE** 5 g/kg thức ăn, 10 ngày liên tục.
- **Vitamin C**: bổ sung 3–5 g/kg thức ăn khi nhiệt độ nước giảm.
- **Môi trường**: sát trùng nước định kỳ, thu gom cá chết, giảm thức ăn khi cá yếu.

## Khi cá có dấu hiệu bệnh
Lấy mẫu gửi phòng xét nghiệm để làm kháng sinh đồ. Việc dùng thuốc điều trị phải theo chỉ định của bác sĩ thú y.`,
`BNP causes heavy losses to pangasius farmers in the Mekong Delta, especially from July to November.

## Prevention strategy
- **2–3 weeks before the season**: **TÍM FISH-IMMUNE** at 5 g/kg feed for 10 days.
- **Vitamin C**: 3–5 g/kg feed when water temperature drops.
- **Environment**: routine water disinfection, remove dead fish, reduce feed when fish are weak.

## When symptoms appear
Send samples for an antibiogram. Any medication must follow a veterinarian’s prescription.`,
`肝肾脓肿病给湄公河三角洲巴沙鱼养殖户造成重大损失，尤其在7月至11月。

## 预防策略
- **发病季前2–3周**：每公斤饲料拌 **TÍM FISH-IMMUNE** 5 g，连用10天。
- **维生素C**：水温下降时每公斤饲料3–5 g。
- **环境**：定期消毒，清除死鱼，鱼体虚弱时减料。

## 出现症状时
送样进行药敏试验。任何用药须遵兽医处方。`),
  },
];

const settings = {
  company: {
    name: 'THỦY SẢN TÍM',
    legal: L('Công ty TNHH Thủy Sản Tím', 'Thuy San Tim Co., Ltd.', 'Thuy San Tim 有限公司'),
    tagline: L('Tinh hoa sinh học · Vững vàng mùa vụ', 'Refined bioscience · Assured harvests', '生物科技精粹 · 稳赢每一季'),
    address: L('Số 88 Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ', '88 3/2 Street, Xuan Khanh Ward, Ninh Kieu District, Can Tho City, Vietnam', '越南芹苴市宁乔郡春庆坊3/2路88号'),
    hotline: '1900 6868',
    phone: '0909 123 456',
    zalo: '0909123456',
    email: 'info@thuysantim.vn',
    hours: L('Thứ 2 – Thứ 7: 7:30 – 17:30', 'Mon – Sat: 7:30 – 17:30', '周一至周六：7:30 – 17:30'),
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    tiktok: 'https://tiktok.com/',
    mapEmbed: 'https://www.google.com/maps?q=Ninh+Kieu,+Can+Tho&output=embed',
  },
  stats: { years: 15, dealers: 650, provinces: 28, ponds: 12000 },
  bank: { bin: 'VCB', accountNo: '0123456789', accountName: 'CONG TY TNHH THUY SAN TIM', bankName: 'Vietcombank — CN Cần Thơ' },
  shipping: { fee: 35000, freeFrom: 2000000 },
  payments: { cod: true, vietqr: true, vnpay: true, momo: true, callback: true },
};

module.exports = { categories, products, diseases, posts, settings };
