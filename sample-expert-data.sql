-- =====================================================
-- Sample Expert Profiles Data for Agricultural Marketplace
-- =====================================================

-- Note: This file contains sample data for expert profiles
-- Run this after the database setup and user authentication setup

-- Insert sample expert profiles
INSERT INTO expert_profiles (
  user_id,
  name,
  title,
  specialization,
  bio,
  years_of_experience,
  education,
  certifications,
  location,
  phone,
  email,
  rating,
  reviews_count,
  hourly_rate,
  availability_status,
  services_offered,
  languages,
  is_verified,
  is_active
) VALUES
-- Expert 1: Plant Protection Specialist
(
  gen_random_uuid(),
  'د. أحمد بن محمد العلوي',
  'خبير وقاية النبات',
  'وقاية النبات والمحاصيل',
  'خبير في مجال وقاية النبات مع أكثر من 15 عاماً من الخبرة في تشخيص ومعالجة أمراض المحاصيل. متخصص في الزراعة العضوية والمكافحة المتكاملة للآفات. حاصل على شهادة الدكتوراه في علوم النبات من جامعة الجزائر.',
  15,
  'دكتوراه في علوم النبات - جامعة الجزائر',
  ARRAY['شهادة خبير وقاية النبات معتمد', 'دورة الزراعة العضوية المتقدمة', 'شهادة المكافحة المتكاملة للآفات'],
  'الجزائر العاصمة',
  '+213555123456',
  'ahmed.alaoui@example.com',
  4.8,
  127,
  3500,
  'available',
  ARRAY['تشخيص أمراض النبات', 'استشارات الزراعة العضوية', 'برامج المكافحة المتكاملة', 'تحليل التربة', 'التدريب الميداني'],
  ARRAY['العربية', 'الفرنسية', 'الإنجليزية'],
  true,
  true
),

-- Expert 2: Irrigation Engineer
(
  gen_random_uuid(),
  'م. فاطمة بن علي',
  'مهندسة الري والهيدروليكا',
  'أنظمة الري الحديثة',
  'مهندسة متخصصة في تصميم وتنفيذ أنظمة الري الحديثة والذكية. خبرة واسعة في الري بالتنقيط والرش المحوري وأنظمة الري الذكية. عملت على مشاريع ري كبيرة في عدة ولايات جزائرية.',
  12,
  'ماجستير هندسة الري والصرف - المدرسة الوطنية العليا للفلاحة',
  ARRAY['شهادة مهندس ري معتمد', 'دورة أنظمة الري الذكية', 'شهادة كفاءة الطاقة في الري'],
  'سطيف',
  '+213666789012',
  'fatima.benali@example.com',
  4.9,
  89,
  4000,
  'available',
  ARRAY['تصميم أنظمة الري', 'الري بالتنقيط', 'أنظمة الري الذكية', 'حساب الاحتياجات المائية', 'صيانة شبكات الري'],
  ARRAY['العربية', 'الفرنسية'],
  true,
  true
),

-- Expert 3: Livestock Veterinarian
(
  gen_random_uuid(),
  'د. يوسف مرابط',
  'طبيب بيطري متخصص',
  'الطب البيطري وتربية الماشية',
  'طبيب بيطري متخصص في تربية الماشية والدواجن. خبرة طويلة في علاج الأمراض الحيوانية وبرامج التحصين والتغذية الحيوانية. يقدم استشارات شاملة لمربي الماشية في المنطقة.',
  20,
  'دكتوراه في الطب البيطري - جامعة قسنطينة',
  ARRAY['شهادة طبيب بيطري معتمد', 'دبلوم التغذية الحيوانية', 'شهادة صحة وسلامة الغذاء الحيواني'],
  'قسنطينة',
  '+213777456789',
  'youcef.marabat@example.com',
  4.7,
  156,
  2800,
  'busy',
  ARRAY['علاج الأمراض الحيوانية', 'برامج التحصين', 'استشارات التغذية', 'فحص الحيوانات', 'التدريب البيطري'],
  ARRAY['العربية', 'الفرنسية'],
  true,
  true
),

-- Expert 4: Soil Scientist
(
  gen_random_uuid(),
  'د. ليلى بوعزيز',
  'خبيرة علوم التربة',
  'علوم التربة والتسميد',
  'متخصصة في تحليل التربة وتحسين خصوبتها. تقدم استشارات شاملة في مجال التسميد الصحيح واستصلاح الأراضي المتدهورة. لها خبرة واسعة في المناطق الصحراوية وشبه الصحراوية.',
  18,
  'دكتوراه في علوم التربة - الجامعة الأمريكية',
  ARRAY['خبير تحليل التربة معتمد', 'شهادة استصلاح الأراضي', 'دورة الزراعة في البيئات الجافة'],
  'وهران',
  '+213888345671',
  'leila.bouaziz@example.com',
  4.6,
  93,
  3200,
  'available',
  ARRAY['تحليل التربة', 'برامج التسميد', 'استصلاح الأراضي', 'الزراعة الصحراوية', 'تحسين خصوبة التربة'],
  ARRAY['العربية', 'الفرنسية', 'الإنجليزية'],
  true,
  true
),

-- Expert 5: Organic Farming Consultant
(
  gen_random_uuid(),
  'أ. كريم زيتوني',
  'استشاري الزراعة العضوية',
  'الزراعة العضوية والمستدامة',
  'خبير في مجال الزراعة العضوية والمستدامة. يساعد المزارعين في التحول من الزراعة التقليدية إلى العضوية. متخصص في إنتاج السماد العضوي والمكافحة الطبيعية للآفات.',
  10,
  'ماجستير الإنتاج النباتي - جامعة تيزي وزو',
  ARRAY['شهادة خبير زراعة عضوية', 'دورة الزراعة المستدامة', 'شهادة إنتاج الكومبوست'],
  'تيزي وزو',
  '+213999567890',
  'karim.zitouni@example.com',
  4.5,
  67,
  2500,
  'available',
  ARRAY['التحول للزراعة العضوية', 'إنتاج السماد العضوي', 'المكافحة الطبيعية', 'تصديق المنتجات العضوية', 'التسويق العضوي'],
  ARRAY['العربية', 'الأمازيغية', 'الفرنسية'],
  false,
  true
),

-- Expert 6: Agricultural Economist
(
  gen_random_uuid(),
  'د. سارة بلحاج',
  'خبيرة الاقتصاد الزراعي',
  'الاقتصاد الزراعي والتسويق',
  'متخصصة في الاقتصاد الزراعي ودراسات الجدوى للمشاريع الزراعية. تقدم استشارات في التخطيط الاقتصادي وتحليل الأسواق الزراعية وطرق التسويق الحديثة.',
  14,
  'دكتوراه في الاقتصاد الزراعي - جامعة باتنة',
  ARRAY['خبير اقتصاد زراعي معتمد', 'دورة دراسات الجدوى', 'شهادة التسويق الرقمي الزراعي'],
  'باتنة',
  '+213777234567',
  'sara.belhaj@example.com',
  4.8,
  101,
  3800,
  'available',
  ARRAY['دراسات الجدوى الزراعية', 'تحليل الأسواق', 'التخطيط الاقتصادي', 'استراتيجيات التسويق', 'إدارة المخاطر الزراعية'],
  ARRAY['العربية', 'الفرنسية', 'الإنجليزية'],
  true,
  true
),

-- Expert 7: Greenhouse Technology
(
  gen_random_uuid(),
  'م. رضا شاوش',
  'خبير تقنيات البيوت المحمية',
  'البيوت المحمية والزراعة المائية',
  'مهندس متخصص في تصميم وإدارة البيوت المحمية والزراعة المائية. خبرة واسعة في التحكم البيئي وأنظمة التبريد والتدفئة للبيوت المحمية في المناخ الجزائري.',
  8,
  'ماجستير الهندسة الزراعية - جامعة البليدة',
  ARRAY['شهادة تقنيات البيوت المحمية', 'دورة الزراعة المائية المتقدمة', 'شهادة أنظمة التحكم البيئي'],
  'البليدة',
  '+213666123789',
  'reda.chaouche@example.com',
  4.4,
  52,
  3000,
  'available',
  ARRAY['تصميم البيوت المحمية', 'الزراعة المائية', 'أنظمة التحكم البيئي', 'تركيب أنظمة التبريد', 'صيانة البيوت المحمية'],
  ARRAY['العربية', 'الفرنسية'],
  false,
  true
),

-- Expert 8: Date Palm Expert
(
  gen_random_uuid(),
  'أ. محمد تاورير',
  'خبير زراعة النخيل',
  'زراعة وإنتاج التمور',
  'خبير متخصص في زراعة النخيل وإنتاج التمور عالية الجودة. يقدم استشارات في العناية بالنخيل وطرق الإكثار والتطعيم ومعالجة أمراض النخيل الشائعة في المناطق الصحراوية.',
  25,
  'إجازة في الإنتاج النباتي - جامعة ورقلة',
  ARRAY['شهادة خبير النخيل', 'دورة تطعيم النخيل', 'شهادة جودة التمور'],
  'ورقلة',
  '+213555789123',
  'mohamed.taourir@example.com',
  4.9,
  187,
  2200,
  'available',
  ARRAY['زراعة النخيل', 'تطعيم النخيل', 'علاج أمراض النخيل', 'تحسين جودة التمور', 'إكثار النخيل'],
  ARRAY['العربية', 'الفرنسية'],
  true,
  true
);

-- Insert default services for future use
CREATE TABLE IF NOT EXISTS expert_services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name_ar VARCHAR(255) NOT NULL,
  name_en VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  is_active BOOLEAN DEFAULT true
);

INSERT INTO expert_services (name_ar, name_en, category) VALUES
('تشخيص أمراض النبات', 'Plant Disease Diagnosis', 'plant_protection'),
('تحليل التربة', 'Soil Analysis', 'soil_science'),
('تصميم أنظمة الري', 'Irrigation System Design', 'irrigation'),
('استشارات الثروة الحيوانية', 'Livestock Consultation', 'livestock'),
('الزراعة العضوية', 'Organic Farming', 'organic'),
('دراسات الجدوى', 'Feasibility Studies', 'economics'),
('البيوت المحمية', 'Greenhouse Technology', 'greenhouse'),
('زراعة النخيل', 'Date Palm Cultivation', 'date_palm'),
('المكافحة المتكاملة', 'Integrated Pest Management', 'pest_control'),
('التسميد المتوازن', 'Balanced Fertilization', 'nutrition'),
('الزراعة المائية', 'Hydroponic Farming', 'hydroponics'),
('تربية النحل', 'Beekeeping', 'apiculture');

-- Success message
SELECT 'Sample expert profiles data inserted successfully! 🌾👨‍🌾' as message;
