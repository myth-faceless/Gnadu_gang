const images = [
  {
    id: 1,
    name: "Aavash",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/287203040_144617501492598_5189379055335032028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-so5DlibW9cAX9Jvauy&tn=AtmRLAJ9VNhiWwO4&_nc_ht=scontent.fktm10-1.fna&oh=00_AfC_qHJgfzvHXdrd-0g6RXbNDK-ixU2phja1Ojq2cXJAVg&oe=63CF7259"
  },
  {
    id: 2,
    name: "Bibek",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/128913664_3254556767989236_305635963108530400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sQkfYTGInUkAX9e8Xol&_nc_ht=scontent.fktm10-1.fna&oh=00_AfB9mgSTh4sORHcUqV_fY1zRFpIbigmAsjOfHpALaRczaQ&oe=63F1D0E1"
  },
  {
    id: 3,
    name: "Manis",
    img:
      "https://lh3.googleusercontent.com/a/AEdFTp5cr5L2iDIGhjPRi4l6KG96PmxYYPZ8lgDgkV7G=s288-p-rw-no"
  },
  {
    id: 4,
    name: "Milan",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/310951470_5828621193867735_3373053899145625903_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gvV_s436C04AX8HKa1N&_nc_oc=AQmF35z71lIzdJ4LqtnhI95xMO5pky_UfybFoTuJku_Q-h0NMRkgcJibNkjdzcRaq6FmG4WV2IZntZOcQ857KtUP&tn=AtmRLAJ9VNhiWwO4&_nc_ht=scontent.fktm10-1.fna&oh=00_AfD72zrOqWkHoJUCfh4WJ07BSovXeJ1K-gXu44k_gx_hSA&oe=63CE6B92"
  },
  {
    id: 5,
    name: "Ojesh",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-1/171232203_452767846011884_5464902479104152922_n.jpg?stp=dst-jpg_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jFokiO56zOgAX_mm_Va&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBdDD2ZgLsrVE1PDWnJUmcLQCapthDDrtiT6PBQOGYwUA&oe=63F1B6B3"
  },
  {
    id: 6,
    name: "Paras",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/277367644_660476571901679_2957145989678741070_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=z0DXeMukhbAAX9kwM0r&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBAvTDfPsiaPJiAdGpjsUe2uRykySHiHd3r0Olt45SzCA&oe=63CEB07B"
  },
  {
    id: 7,
    name: "Pradeep",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-1/278770599_312755404319482_6301216304115834579_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZhT3hk6ZDOIAX9RHj3Y&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAOZl-Ff5pbEoSDVmgcH6xfaiYTT1M24tKQulNvRAKloA&oe=63CEAB66"
  },
  {
    id: 8,
    name: "Sabin",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/267735799_1534082180288418_8344142334801025226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GzBDiDWMcsIAX_yd7c6&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDb_eOe3hMrEyTrOmyDFCqqYo7aRZ1x5D2JZTDP8X5TBA&oe=63CF9985"
  },
  {
    id: 9,
    name: "Samundra",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/324418427_481101204179892_4527779466542696653_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zLBmG5yo7KQAX-aBNiT&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAsvV-O6sGYfhV2GZPHL2egkccTXXFdHJQZ7bCoNBriRw&oe=63CF51F0"
  },
  {
    id: 10,
    name: "Saroj",
    img:
      "https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/324676146_509814764340143_5235954130517684278_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KFI_v-IK2YwAX9IyK6V&_nc_ht=scontent.fktm10-1.fna&oh=00_AfCyHt5Qmeybc6B1yK5E0O9UOM_eJm-p4a6T5MH8kTmsEQ&oe=63CE8F54"
  }
];

export default images;
