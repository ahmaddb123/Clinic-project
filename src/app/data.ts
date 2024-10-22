interface MedicalService {
  title: string;
  description: string;
  imageUrl: string;
}

export const medicalServices: MedicalService[] = [
  {
    title: "تشخيص وعلاج نزلات البرد",
    description:
      "نقدم تشخيصًا دقيقًا وعلاجًا فعالًا لنزلات البرد، حيث تشمل الرعاية تخفيف الأعراض من خلال استخدام الأدوية المناسبة، بالإضافة إلى تقديم نصائح للوقاية والعناية الذاتية لتحسين الراحة العامة.",
    imageUrl: "img-serv-n-1.jpg",
  },
  {
    title: "تشخيص وعلاج الانسداد الشعبي المزمن",
    description:
      "نوفر تقييمًا شاملًا وعلاجًا مخصصًا للانسداد الشعبي المزمن، مع التركيز على تحسين التنفس باستخدام الأدوية الموسعة للشعب الهوائية، والعلاج بالأكسجين، وتقنيات العلاج الطبيعي.",
    imageUrl: "img-serv-n-2.jpg",
  },
  {
    title: "علاج الكحة في الكبار والصغار",
    description:
      "نقدم علاجات فعالة لحالات الكحة بمختلف أنواعها الجافة والشديدة المصحوبة ببلغم لدى الكبار والصغار، بما في ذلك تشخيص الأسباب الكامنة خلف الكحة وتقديم العلاجات الدوائية المناسبة لتخفيف الأعراض.",
    imageUrl: "img-serv-16.jpg",
  },
  {
    title: "تشخيص وعلاج النزيف الرئوي والتدران الرئوي",
    description:
      "نقدم خدمات تشخيص شاملة للنزيف الرئوي والتدران الرئوي، مع إمكانية تقديم العلاجات المناسبة مثل الأدوية، أو التدخلات الجراحية في الحالات المعقدة.",
    imageUrl: "img-serv-n-4.jpg",
  },
  {
    title: "تشخيص وعلاج الآلام الصدرية",
    description:
      "نوفر تقييمًا دقيقًا للآلام الصدرية الحادة والمزمنة، مع تقديم العلاجات المناسبة التي تشمل الأدوية المسكنة والعلاج الطبيعي، بالإضافة إلى التدخل الجراحي عند الحاجة.",
    imageUrl: "img-serv-n-5.jpg",
  },
  {
    title: "تشخيص وعلاج التهاب الصدر البللوري",
    description:
      "نقدم تشخيصًا دقيقًا وعلاجًا لالتهاب الصدر البللوري، حيث نستخدم الأدوية المضادة للبكتيريا والعلاج الطبيعي لتحسين حالة المرضى.",
    imageUrl: "img-serv-n-6.jpg",
  },
  {
    title: "تشخيص وعلاج استرواح الغشاء البللوري",
    description:
      "نقوم بتقديم الرعاية اللازمة لحالات استرواح الغشاء البللوري، مع استخدام أنبوب الصدر للتخلص من الهواء أو السوائل وتحسين التنفس.",
    imageUrl: "img-serv-n-7.jpg",
  },
  {
    title: "تشخيص وعلاج أورام الرئة",
    description:
      "نقدم تقييمًا شاملًا وعلاجًا متقدمًا لأورام الرئة، بما في ذلك الجراحة والعلاج الكيميائي والعلاج الإشعاعي، حسب حاجة المريض.",
    imageUrl: "img-serv-n-8.jpg",
  },
  {
    title: "تشخيص وعلاج الانسكاب البللوري",
    description:
      "نقدم تقييمًا شاملًا للانسكاب البللوري بمختلف أنواعه، مع تقديم خيارات علاجية تشمل تصريف السوائل باستخدام الأنابيب أو الإجراءات الطبية الأخرى.",
    imageUrl: "img-serv-n-9.jpg",
  },
  {
    title: "تشخيص وعلاج أمراض الجهاز التنفسي",
    description:
      "نوفر تشخيصًا دقيقًا وعلاجًا لأمراض الجهاز التنفسي مثل الربو، التهاب الشعب الهوائية المزمن، والالتهاب الرئوي. نستخدم أحدث التقنيات لتقديم الرعاية الطبية الفعالة ومساعدة المرضى على تحسين نوعية حياتهم والحفاظ على صحتهم وخاصة في الامراض المزمنة.",
    imageUrl: "img-serv-17.jpg",
  },
  {
    title: "تشخيص وعلاج أمراض الرئة",
    description:
      "تشخيص وعلاج الحالات المتعلقة بالرئة مثل التهابات الرئة، سرطان الرئة، وتليف الرئة. نستخدم أحدث التقنيات لتقديم الرعاية اللازمة وتحسين صحة الجهاز التنفسي.",
    imageUrl: "img-serv-3.jpg",
  },
  {
    title: "علاج الحساسية الصدرية",
    description:
      "نقوم بتقديم خطط علاجية للمرضى الذين يعانون من الحساسية الصدرية والتي تؤثر على التنفس. تشمل الرعاية الوقاية من العوامل المحفزة وتقديم العلاجات الدوائية.",
    imageUrl: "img-serv-6.jpg",
  },

  {
    title: "جلسات بخار للحالات الحرجة",
    description:
      "تقديم جلسات الرذاذ (النبولايزر) لتحسين التنفس في بعض الحلات الربو الشعبي والنزلات الشعبية المزمنة",
    imageUrl: "img-serv-1.jpg",
  },
  {
    title: "علاج حالات الإصابة بفيروس كورونا",
    description:
      "تشخيص وعلاج حالات الإصابة بفيروس كورونا المستجد (COVID-19)، مع تقديم الرعاية المناسبة للحالات البسيطة والمتوسطة وتحويل الحالات الخطرة للعلاج والرعاية في المستشفيات المتخصصة, وتقديم النصائح الوقائية للمرضى  .",
    imageUrl: "img-serv-8.jpg",
  },
  {
    title: "تشخيص وعلاج مرض السكر وإرتفاع ضغط الدم",
    description:
      "نختص في فحص وعلاج مرض السكري وارتفاع ضغط الدم. نقوم بفحص مستوى السكر في الدم وضغط الدم، ونقدم برامج علاجية تشمل تغييرات في نمط الحياة، مثل تحسين النظام الغذائي وزيادة النشاط البدني، بالإضافة إلى الأدوية عند الحاجة.",
    imageUrl: "img-serv-n-10.jpg",
  },
  {
    title: "علاج ارتجاع المريء",
    description:
      "نوفر حلولًا متكاملة لعلاج ارتجاع المريء والحموضة المزمنة، حيث أن هذه الأمراض تسبب مشاكل عديدة في الجهاز التنفسي.",
    imageUrl: "img-serv-2.jpg",
  },
  {
    title: "مساعدة المدخنين في الإقلاع عن التدخين",
    description:
      "  نقدم برامج علاجية متخصصة لمساعدة المدخنين في الإقلاع عن التدخين والتوعية الصحية بالأثار الجانبية المرتبطة بالتدخين التي تؤثر على الفرد والأسرة والمجتمع كإرتفاع ضغط الدم والنوبات القلبية وقرحة المعدة وسرطان الرئة. ",
    imageUrl: "img-serv-9.jpg",
  },
  {
    title: "متابعة وعلاج الأمراض المزمنة",
    description:
      "نقوم بمتابعة المرضى الذين يعانون من أمراض مزمنة مرتبطة بالجهاز التنفسي والهضمي مثل الربو، والانسداد الرئوي المزمن، مع تقديم العلاج المناسب للحفاظ على استقرار الحالة.",
    imageUrl: "img-1.jpg",
  },
  {
    title: "علاج أمراض الجهاز الهضمي",
    description: "تشخيص وعلاج أمراض الجهاز الباطنية بمختلف انواعها.",
    imageUrl: "img-serv-11.jpg",
  },

  {
    title: "علاج مشاكل القولون",
    description:
      "تشخيص وعلاج اضطرابات القولون مثل القولون العصبي، التهابات القولون، وحالات سرطان القولون. نقدم استشارات دقيقة وعلاجات فعالة لتحسين جودة الحياة.",
    imageUrl: "img-serv-13.jpg",
  },

  {
    title: "علاج الأطفال من سن الأشهر إلى البالغين",
    description:
      "يقدم الطبيب رعاية طبية متخصصة للأطفال من سن الأشهر حتى البالغين، مع متابعة نموهم وصحتهم العامة، وتقديم العلاجات المناسبة لحالات مثل التهابات الجهاز التنفسي والجهاز الهضمي.",
    imageUrl: "img-serv-7.jpg",
  },
];
interface Testimonial {
  name: string;
  feedback: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "أحمد عبدالعزيز",
    feedback:
      "الخدمة الطبية كانت ممتازة والطبيب كان محترف للغاية في التشخيص والعلاج. قدم لي شرحًا مفصلاً عن حالتي وخيارات العلاج المتاحة. أنصح الجميع بزيارة العيادة حيث شعرت بالراحة والأمان طوال فترة العلاج، بالإضافة إلى اهتمام الفريق الطبي بجميع التفاصيل.",
    imageUrl: "testimonials-1.jpg",
  },
  {
    name: "منى السيد",
    feedback:
      "كانت تجربتي في العيادة رائعة. استقبلني فريق العيادة بشكل احترافي والدكتور اهتم بتفاصيل حالتي بشكل كبير. تلقيت رعاية متكاملة مع متابعة مستمرة من قبل الطبيب حتى بعد انتهاء العلاج. أشعر الآن بتحسن كبير وأشكر الجميع على الرعاية الممتازة.",
    imageUrl: "testimonials-8.jpg",
  },
  {
    name: "محمد علاء",
    feedback:
      "رعاية مميزة واستقبال محترم. الطبيب كان متفهمًا لحالتي وقدم لي العلاج المناسب بسرعة. بالإضافة إلى ذلك، العيادة كانت نظيفة ومجهزة بأحدث الأجهزة الطبية. نصحني الطبيب ببعض التعديلات في نمط حياتي والتي ساعدتني على التعافي بشكل أسرع.",
    imageUrl: "testimonials-2.jpg",
  },
  {
    name: "فاطمة حسن",
    feedback:
      "العيادة نظيفة جدًا ومجهزة بأحدث التقنيات. شعرت بالراحة أثناء الفحص، والدكتور كان متميزًا في التواصل معي. قام بشرح جميع التفاصيل المتعلقة بحالتي ووضع خطة علاجية واضحة. بعد العلاج، شعرت بتحسن كبير ووجدت الدعم الكامل من الفريق الطبي.",
    imageUrl: "testimonials-15.jpg",
  },
  {
    name: "كريم مصطفى",
    feedback:
      "أفضل عيادة زرتها على الإطلاق. الطبيب كان دقيقًا جدًا في التشخيص وأعطاني خطة علاج واضحة وسهلة المتابعة. العيادة تقدم رعاية متميزة وشاملة لكل مريض، وأنا ممتن جدًا للنتائج التي حصلت عليها بعد العلاج. سأوصي الجميع بزيارة هذه العيادة.",
    imageUrl: "testimonials-3.jpg",
  },
  {
    name: "نورا إبراهيم",
    feedback:
      "العيادة منظمة والدكتور لديه خبرة كبيرة. لقد شعرت براحة نفسية أثناء العلاج حيث كان الطبيب يستمع لي بعناية ويفهم احتياجاتي. النتائج كانت رائعة والعلاج الذي قدمه لي كان دقيقًا وفعّالًا. أشعر الآن بتحسن كبير وأقدر الدعم الذي تلقيته.",
    imageUrl: "testimonials-14.jpg",
  },
  {
    name: "علي عبدالحليم",
    feedback:
      "تجربتي في هذه العيادة كانت ممتازة. لقد تلقيت علاجًا مخصصًا لحالتي والطبيب كان متعاونًا جدًا في شرح حالتي وتقديم النصائح المفيدة. العيادة مجهزة بشكل جيد والخدمة كانت سريعة وفعالة. بالتأكيد سأعود مرة أخرى إذا احتجت لأي علاج.",
    imageUrl: "testimonials-4.jpg",
  },
  {
    name: "سارة محمود",
    feedback:
      "الدكتور محترف للغاية ويشرح الحالة بالتفصيل. أقدر اهتمامه الكبير بصحة المرضى والمتابعة المستمرة بعد العلاج. فريق العمل في العيادة كان ودودًا ومتعاونًا جدًا، مما جعل تجربتي مريحة للغاية. أشكر الجميع على الخدمة المتميزة.",
    imageUrl: "testimonials-13.jpg",
  },
  {
    name: "عمرو أحمد",
    feedback:
      "تجربة ممتازة وخدمة على أعلى مستوى. العيادة توفر رعاية طبية شاملة ومريحة، والدكتور كان مميزًا في تعامله مع حالتي الصحية. شعرت بالثقة والاطمئنان خلال جلسات العلاج وكنت على علم بكل خطوة. النتائج كانت رائعة وأنا سعيد جدًا بها.",
    imageUrl: "testimonials-5.jpg",
  },
  {
    name: "نهى شوقي",
    feedback:
      "تم الاهتمام بحالتي بشكل دقيق والطبيب قدم لي حلول سريعة وفعالة. العيادة نظيفة ومنظمة جدًا، وشعرت بالراحة طوال فترة الزيارة. بعد العلاج شعرت بتحسن كبير وأشعر أنني الآن في أفضل حالاتي الصحية. أنصح بشدة بهذه العيادة للرعاية الصحية الممتازة.",
    imageUrl: "testimonials-12.jpg",
  },
  {
    name: "إيهاب سمير",
    feedback:
      "العلاج كان ممتازًا وتم شفائي بسرعة بفضل الرعاية المتميزة التي تلقيتها هنا. الطبيب كان لديه خبرة كبيرة واستطاع تحديد مشكلتي بسرعة. العيادة أيضًا تقدم نصائح عملية لتحسين الصحة العامة والابتعاد عن المخاطر الصحية المحتملة.",
    imageUrl: "testimonials-11.jpg",
  },
  {
    name: "ياسمين علي",
    feedback:
      "شكرًا للطبيب على الخدمة المتميزة والعناية بالتفاصيل. شعرت بالراحة والاهتمام الكبير من جميع أعضاء الفريق الطبي. تجربة العلاج كانت سلسة وفعالة، والطبيب كان يتابع حالتي بشكل مستمر حتى بعد انتهاء العلاج. أنصح الجميع بزيارة هذه العيادة.",
    imageUrl: "testimonials-9.jpg",
  },
  {
    name: "مصطفى شريف",
    feedback:
      "العيادة مجهزة جيدًا والطبيب كان متعاونًا جدًا. بعد زيارتي الأولى، شعرت بتحسن كبير حيث قدم لي الدكتور خطة علاج شاملة ودقيقة. الخدمة كانت رائعة وسأعود بالتأكيد عند الحاجة، وأشكر الطبيب وفريق العمل على الرعاية الممتازة.",
    imageUrl: "testimonials-19.jpg",
  },
  {
    name: "إيمان جمال",
    feedback:
      "الدكتور كان متميزًا في التشخيص والعلاج. شعرت بتحسن سريع بعد الزيارة، وكان من السهل اتباع خطة العلاج التي قدمها لي. العيادة أيضًا تقدم أجواء مريحة وتساعد على الاسترخاء خلال الفحص والعلاج. شكرًا لكم على الرعاية المتميزة!",
    imageUrl: "testimonials-7.jpg",
  },
  {
    name: "حسن عطية",
    feedback:
      "الاهتمام بالتفاصيل كان ممتازًا والطبيب قدم لي نصائح قيمة حول تحسين صحتي العامة. شعرت بالراحة خلال الفحص والعلاج وكانت العيادة تقدم بيئة مريحة ومحترفة للغاية. أوصي بشدة بزيارة هذه العيادة لكل من يبحث عن رعاية طبية متميزة.",
    imageUrl: "testimonials-17.jpg",
  },
  {
    name: "رنا سعيد",
    feedback:
      "العناية التي تلقيتها في العيادة كانت من الدرجة الأولى. أشعر بشكر كبير لفريق العمل على الرعاية الممتازة. الطبيب كان يتابع حالتي بشكل مستمر وتأكد من أنني أتلقى أفضل رعاية ممكنة. سأوصي بالتأكيد بهذه العيادة لأصدقائي وعائلتي.",
    imageUrl: "testimonials-10.jpg",
  },
];

interface Article {
  id: number;
  title: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "نزلات البرد",
    content:
      "نزلات البرد هي عدوى فيروسية تصيب الجهاز التنفسي العلوي، وتتميز بأعراض مثل السعال، والاحتقان، والعطس، واحتقان الأنف. تُعتبر نزلات البرد شائعة وعادة ما تكون خفيفة، ويمكن أن تستمر لمدة أسبوع أو أكثر. على الرغم من عدم وجود علاج محدد، يمكن تخفيف الأعراض من خلال الراحة، وشرب السوائل، واستخدام الأدوية المساعدة، مثل مسكنات الألم أو مضادات الهيستامين.",
  },
  {
    id: 2,
    title: "السعال الحاد والمزمن المصاحب لإفرازات الصدر",
    content:
      "السعال الحاد هو سعال يستمر لمدة أقل من ثلاثة أسابيع، بينما يستمر السعال المزمن لأكثر من ثمانية أسابيع. قد يكون مصحوبًا بإفرازات من الصدر بسبب العدوى أو التهاب الشعب الهوائية. يجب تقييم الحالة من قبل الطبيب، حيث يتضمن العلاج علاج السبب الأساسي. تشمل خيارات العلاج الأدوية المثبطة للسعال والموسعة للشعب الهوائية، بالإضافة إلى الراحة وشرب السوائل.",
  },
  {
    id: 3,
    title: "النزيف الرئوي والتدران الرئوي",
    content:
      "النزيف الرئوي هو خروج الدم من الرئتين، وقد يكون ناتجًا عن عدة أسباب، مثل الالتهابات أو الأورام أو الإصابات. يعتبر التدران الرئوي تراكم السوائل في تجويف الصدر، مما يضغط على الرئتين ويؤثر على التنفس. يتطلب كلا الحالتين تقييمًا طبيًا عاجلًا لتحديد السبب الدقيق وتقديم العلاج المناسب، والذي قد يتضمن الأدوية أو التدخلات الجراحية.",
  },
  {
    id: 4,
    title: "الآلام الصدرية الحادة والمزمنة",
    content:
      "الآلام الصدرية الحادة قد تكون ناتجة عن حالات طبية خطيرة، مثل احتشاء عضلة القلب أو انسداد الشرايين، بينما الآلام المزمنة يمكن أن تكون ناتجة عن مشكلات عضلية أو رئوية. يجب على الأفراد الذين يعانون من آلام صدرية مفاجئة أو شديدة الحصول على رعاية طبية فورية، حيث يعتمد العلاج على السبب الأساسي. الفحوصات الطبية ضرورية لتحديد الحالة بدقة.",
  },
  {
    id: 5,
    title: "التهاب الصدر البللوري الحاد والمزمن",
    content:
      "التهاب الصدر البللوري هو التهاب يصيب الغشاء المحيط بالرئتين، ويتميز بأعراض مثل ألم الصدر وصعوبة التنفس. يمكن أن يكون حادًا أو مزمنًا، وغالبًا ما ينتج عن عدوى أو حالات التهابية. يشمل العلاج استخدام المضادات الحيوية، وملينات السعال. في حالات معينة، قد يتطلب تدخلًا جراحيًا لتصريف السوائل المتجمعة، مما يساعد في تخفيف الضغط على الرئتين.",
  },
  {
    id: 6,
    title: "استرواح الغشاء البلوري",
    content:
      "استرواح الغشاء البلوري هو حالة تتميز بتجمع الهواء في تجويف الغشاء البللوري، مما يؤدي إلى انهيار الرئة. قد يحدث نتيجة إصابة أو مرض، مثل عدوى أو سرطان. تشمل الأعراض ضيق التنفس وآلام الصدر. يعتمد العلاج على شدة الحالة، وقد يتطلب في بعض الأحيان إدخال أنبوب صدر لتصريف الهواء أو السوائل، مما يساعد في إعادة الرئة إلى وضعها الطبيعي.",
  },
  {
    id: 7,
    title: "أورام الرئة بأنواعها",
    content:
      "تعتبر أورام الرئة من أخطر أنواع السرطان، ويمكن أن تكون حميدة أو خبيثة. تشمل الأعراض السعال المستمر، وضيق التنفس، وفقدان الوزن غير المبرر. يعتمد العلاج على نوع الورم ومرحلته، وقد يشمل الجراحة، والعلاج الكيميائي، أو العلاج الإشعاعي. الكشف المبكر عن الأورام يزيد من فرص النجاح في العلاج، ولذلك من المهم إجراء الفحوصات الدورية.",
  },
  {
    id: 8,
    title: "الربو",
    content:
      "الربو هو حالة تنفسية مزمنة تؤثر على الشعب الهوائية والرئتين، مما يؤدي إلى صعوبة في التنفس. تتضمن الأعراض السعال، ضيق التنفس، والشعور بالضغط على الصدر، ويمكن أن تتفاقم الأعراض بسبب عوامل مثل الحساسية، التلوث، أو النشاط البدني. يعتمد العلاج على الأدوية الموسعة للشعب الهوائية، التي تساعد على فتح الشعب الهوائية، بالإضافة إلى الأدوية الوقائية مثل الكورتيكوستيرويدات التي تقلل الالتهاب. من المهم إدارة الأعراض وتجنب المحفزات المعروفة.",
  },
  {
    id: 9,
    title: "التهاب الشعب الهوائية",
    content:
      "التهاب الشعب الهوائية هو التهاب في الشعب الهوائية، ويؤدي إلى سعال مستمر وإفرازات مخاطية. يمكن أن يكون التهاب الشعب الهوائية حادًا، يحدث نتيجة لعدوى فيروسية مثل نزلات البرد، أو مزمنًا، غالبًا ما يرتبط بالتدخين أو التعرض للمواد الكيميائية. تشمل الأعراض السعال، احتقان الصدر، وصعوبة في التنفس. يشمل العلاج تناول السوائل، استخدام الأدوية المساعدة لتخفيف الأعراض، وتجنب المهيجات.",
  },
  {
    id: 10,
    title: "انسداد الشعب الهوائية المزمن",
    content:
      "انسداد الشعب الهوائية المزمن هو حالة تنفسية تتميز بصعوبة تدفق الهواء إلى الرئتين، وغالبًا ما يرتبط بالتدخين أو التعرض للملوثات. تشمل الأعراض سعالًا مزمنًا، صعوبة في التنفس، وإفرازات من الصدر. يتطلب العلاج استخدام الأدوية الموسعة للشعب الهوائية، والعلاج بالأكسجين، وإعادة تأهيل الرئة لتحسين القدرة على التنفس. الإقلاع عن التدخين يعتبر خطوة أساسية في إدارة هذه الحالة.",
  },
  {
    id: 11,
    title: "التهاب الرئة",
    content:
      "التهاب الرئة هو حالة عدوى تصيب الرئتين، وتتضمن أعراضًا مثل الحمى والسعال وصعوبة التنفس. يحدث عادة بسبب العدوى البكتيرية أو الفيروسية، ويمكن أن تؤدي إلى مضاعفات خطيرة إذا لم يتم علاجها بشكل صحيح. يعتمد العلاج على نوع العدوى، وعادة ما يتطلب تناول المضادات الحيوية للعدوى البكتيرية أو الأدوية المضادة للفيروسات. من المهم الحصول على العناية الطبية إذا استمرت الأعراض.",
  },
  {
    id: 12,
    title: "الانسداد الرئوي المزمن",
    content:
      "الانسداد الرئوي المزمن هو مرض رئوي يسبب صعوبة في التنفس نتيجة لتدمير الأنسجة الرئوية. غالبًا ما يكون نتيجة للتدخين أو التعرض للتلوث البيئي. تتضمن الأعراض ضيق التنفس، السعال المستمر، والشعور بالتعب. يعتمد العلاج على الأدوية المستخدمة لتخفيف الأعراض، والعلاج بالأكسجين، وكذلك إعادة تأهيل الرئة لتحسين جودة الحياة.",
  },
  {
    id: 13,
    title: "التهاب الشعب الهوائية المزمن",
    content:
      "التهاب الشعب الهوائية المزمن هو التهاب طويل الأمد في الشعب الهوائية، مما يؤدي إلى سعال وإفرازات مخاطية مستمرة. غالبًا ما يرتبط التدخين كعامل رئيسي في تفاقم الحالة. يتطلب العلاج تعديل نمط الحياة، مثل الإقلاع عن التدخين واستخدام الأدوية المساعدة. يمكن أن يكون العلاج الداعم مفيدًا أيضًا في تحسين نوعية الحياة.",
  },
  {
    id: 14,
    title: "التهاب الرئة البكتيري",
    content:
      "التهاب الرئة البكتيري هو حالة عدوى تصيب الرئتين نتيجة لعدوى بكتيرية. تشمل الأعراض السعال الجاف، الحمى، وآلام الصدر. يعتبر تشخيص التهاب الرئة البكتيري أمرًا حاسمًا، وعادة ما يتطلب الفحص الطبي والفحوصات المخبرية. يعتمد العلاج بشكل رئيسي على المضادات الحيوية، ويجب البدء بها في أسرع وقت ممكن، حيث أن التأخير قد يؤدي إلى تفاقم الحالة.",
  },
];
type DoctorExperience = {
  id: number;
  title: string;
  description: string;
};

export const doctorExperiences: DoctorExperience[] = [
  {
    id: 1,
    title: "الخبرات العامة",
    description:
      "الدكتور عبد السلام الشامي هو طبيب متخصص في أمراض الصدر والجهاز التنفسي، حاصل على درجة الدكتوراة من جامعة الأزهر، إضافة إلى زمالة مرموقة من كلية أطباء الصدر الأمريكية. يمتلك الدكتور عبد السلام خبرة تمتد لأكثر من 40 عامًا في مجال الطب والإدارة الطبية، مما يجعله من أبرز الأطباء في هذا التخصص.",
  },
  {
    id: 2,
    title: "التخصصات والعلاج",
    description:
      "طوال مسيرته الطبية، تخصص الدكتور عبد السلام في معالجة الأمراض المتعلقة بالجهاز التنفسي، مثل حساسية الصدر والربو. إلى جانب ذلك، يعالج الأمراض الباطنية لدى المرضى، حيث يقدم رعاية طبية شاملة تجمع بين التشخيص الدقيق والعلاج المتقدم.",
  },
  {
    id: 3,
    title: "الإنجازات الطبية",
    description:
      "يعتبر الدكتور عبد السلام من الأطباء الرواد في مجاله، وقد ساهم بخبراته الطويلة في تحسين صحة العديد من المرضى وتقديم استشارات طبية متخصصة في مختلف الحالات الصدرية والباطنية.",
  },
];
