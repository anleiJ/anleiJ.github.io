const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    lrcType: 3,
    audio: [
      {
        name: "在水一方",
        artist: '李健',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n2/31/23/2648161877.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/73/49/1131928591.jpg',
        lrc: 'song-post/zaishuiyifang.lrc'
      },
      {
        name: '父亲的散文诗',
        artist: '李健',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n3/95/89/2920034592.mp3',
        cover: 'http://img.9ku.com/geshoutuji/singertuji/2/2215/2215_1.jpg',
        lrc: 'song-post/李健-父亲写的散文诗 .lrc'
      },
      {
        name: '贝加尔湖畔',
        artist: '李健',
        url: 'http://other.web.rp01.sycdn.kuwo.cn/resource/n1/55/12/2761649758.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550259631250&di=ce9670c4bd4377a40a85351d786b7506&imgtype=0&src=http%3A%2F%2Fp1.ifengimg.com%2Ffck%2F2017_23%2F348f6019cbb21eb_w640_h400.jpg',
        lrc: 'song-post/李健-贝加尔湖畔.lrc'
      },
      {
        name: '如果遇见你',
        artist: '李健',
        url: 'http://sh.sycdn.kuwo.cn/resource/n2/12/4/3025196666.mp3',
        cover: 'http://news.cri.cn/gb/mmsource/images/2015/02/03/2/3948727055636910058.jpg',
        lrc: 'song-post/如果遇见你.lrc'
      },
      {
        name: '当有天老去',
        artist: '李健',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n3/94/35/150576327.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550259631249&di=d12c1056c537ba3d4e7faa9cd5f4ae03&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F22%2F20150522225958_JXNhQ.jpeg',
        lrc: 'song-post/李健-当有天老去.lrc'
      },
      {
        name: '当你老了',
        artist: '李健',
        url: 'http://music.163.com/song/media/outer/url?id=31877536.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550259631249&di=ccfe63f811d4fe84b489975fd61b7d89&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160908%2Fa9ef7906c8e440579cc9f49d4052f499_th.jpeg',
        lrc: 'song-post/李健-当你老了(Live).lrc'
      },
      {
        name: '异乡人',
        artist: '李健',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n3/79/94/3808041751.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550263593055&di=adab717a1252458afe6f23e51ee30bc0&imgtype=0&src=http%3A%2F%2Fi.shangc.net%2F2017%2F0819%2F20170819020235503.jpg',
        lrc: 'song-post/李健-异乡人 (Live).lrc'
      },
      
      {
        name: '车站',
        artist: '李健',
        url: 'http://other.web.nc01.sycdn.kuwo.cn/resource/n2/77/24/2926606991.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550258250986&di=f68a6deda25dc91097cbd40a1b7f1887&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170724%2Fc13161a1ea0542ec8762cff49f4ba254.jpeg',
        lrc: 'song-post/李健-车站.lrc'
      },
      {
        name: '一往情深的恋人',
        artist: '李健',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/resource/n1/77/35/3136704794.mp3',
        cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550258250986&di=93d9d4e5f53fb58b41faee85a03739ac&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012fa35a026069a801202b0cd4cdc7.jpg%403000w_1l_2o_100sh.jpg',
        lrc: 'song-post/李健-一往情深的恋人.lrc'
      },
      {
        name: '雾中列车',
        artist: '李健&王俊凯',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n3/75/51/831729335.mp3',
        cover: 'http://n.sinaimg.cn/transform/20150128/1TlA-chmifpx5882329.jpg',
        lrc: 'song-post/王俊凯&李健-雾中列车-(电影《解忧杂货店》宣传曲).lrc'
      },
      {
        name: '梦一场',
        artist: '李健',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n1/192/32/43/816175226.mp3',
        cover: 'http://img.9ku.com/pic/zjpic/15/144242.jpg',
        lrc: 'song-post/李健-梦一场.lrc'
      },
      {
        name: '风吹麦浪',
        artist: '李健',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n1/192/72/65/90497306.mp3',
        cover: 'http://himg2.huanqiu.com/attachment2010/2015/0804/10/03/20150804100330215.jpg',
        lrc: 'song-post/李健-风吹麦浪.lrc'
      },
      {
        name: '假如爱有天意',
        artist: '李健',
        url: 'http://other.web.rg01.sycdn.kuwo.cn/resource/n2/81/92/2005034030.mp3',
        cover: 'http://img1.gtimg.com/ninja/1/2015/09/ninja144223500712126.jpg',
        lrc: 'song-post/李健-假如爱有天意-(电影《太平轮·彼岸》推广曲).lrc'
      },
      {
        name: "抚仙湖",
        artist: '李健',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n3/192/90/75/1141601382.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/73/49/1131928591.jpg',
        lrc: 'song-post/李健-抚仙湖.lrc'
      },
      {
        name: '秋语',
        artist: '刘欢',
        url: 'http://sk.sycdn.kuwo.cn/resource/n1/34/32/3327926324.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/96/70/19879920.jpg',
        lrc: 'song-post/刘欢-秋语.lrc'
      },
      {
        name: '夜',
        artist: '刘欢',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n3/13/44/1645200962.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/96/70/19879920.jpg',
        lrc: 'song-post/刘欢-夜 (Live).lrc'
      },
      {
        name: '爱的一生',
        artist: '刘欢',
        url: 'http://sk.sycdn.kuwo.cn/resource/n2/23/16/3669096187.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: 'song-post/'
      },
      {
        name: '从前慢',
        artist: '刘欢',
        url: 'http://so.sycdn.kuwo.cn/resource/n2/44/93/4258922412.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },
      {
        name: '带着地球去流浪',
        artist: '刘欢',
        url: 'http://sl.sycdn.kuwo.cn/resource/n3/56/0/2424417194.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },
      {
        name: '璐璐',
        artist: '刘欢',
        url: 'http://sm.sycdn.kuwo.cn/resource/n3/38/99/2436388549.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },
      {
        name: '遥远的璐',
        artist: '刘欢',
        url: 'http://sm.sycdn.kuwo.cn/resource/n1/2/30/2925420282.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },
      {
        name: '弯弯的月亮',
        artist: '刘欢',
        url: 'http://sm.sycdn.kuwo.cn/resource/n2/60/94/3674005459.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },
      {
        name: '沧海一声笑+好汉歌',
        artist: '刘欢',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n2/26/33/2049546449.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vMyUg24lPJE.jpg?max_age=2592000',
        lrc: ''
      },

      {
        name: '阿刁',
        artist: '张韶涵',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n3/26/41/4167610444.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/12/85/1062942743.jpg',
        lrc: 'song-post/张韶涵-阿刁 (Live).lrc'
      },
      {
        name: '亲爱的，那不是爱情',
        artist: '张韶涵',
        url: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n2/27/46/823658490.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/12/85/1062942743.jpg',
        lrc: 'song-post/张韶涵-亲爱的,那不是爱情-(电视剧《宫-野蛮王妃》片尾曲).lrc'
      },
      {
        name: '再见青春',
        artist: '张韶涵',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/31/9/1636469698.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/12/85/1062942743.jpg',
        lrc: 'song-post/张韶涵-再见青春 (Live).lrc'
      },
      
      {
        name: "梦在燃烧",
        artist: '汤子星',
        url: 'http://other.web.ra01.sycdn.kuwo.cn/resource/n1/128/41/50/165997948.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/88/91/3722075803.jpg',
        lrc: 'song-post/三国演义主题曲-梦在燃烧.lrc'
      },
      {
        name: "【数码宝贝OP】Butter-Fly",
        artist: 'SwZap',
        url: 'http://sb.sycdn.kuwo.cn/resource/n1/93/77/38157358.mp3',
        cover: 'http://image.kuwo.cn/website/pc/default/artistDefault.jpg',
        lrc: ''
      },
      {
        name: "她",
        artist: '声入人心男团',
        url: 'http://sm.sycdn.kuwo.cn/resource/n2/68/87/3555117567.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/72/36/2225019929.jpg',
        lrc: ''
      },
      {
        name: "真爱乐章",
        artist: '声入人心男团',
        url: 'http://sn.sycdn.kuwo.cn/resource/n3/70/90/70306288.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/72/36/2225019929.jpg',
        lrc: ''
      },
      {
        name: "心脏",
        artist: '声入人心男团',
        url: 'http://sm.sycdn.kuwo.cn/resource/n3/91/80/1673777309.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/72/36/2225019929.jpg',
        lrc: ''
      },
      {
        name: "总有一天",
        artist: '声入人心男团',
        url: 'http://sn.sycdn.kuwo.cn/resource/n1/53/11/2574396014.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/72/36/2225019929.jpg',
        lrc: ''
      },
      {
        name: "大船",
        artist: '声入人心男团',
        url: 'http://so.sycdn.kuwo.cn/resource/n1/2/24/3079878289.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/72/36/2225019929.jpg',
        lrc: ''
      },
      {
        name: "Катюша",
        artist: 'Polina Gagarina',
        url: 'http://sk.sycdn.kuwo.cn/resource/n2/57/84/4012729082.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/60/91/506527592.jpg',
        lrc: ''
      },
      {
        name: "贝加尔湖畔",
        artist: 'Polina Gagarina',
        url: 'http://sm.sycdn.kuwo.cn/resource/n1/46/64/1837439032.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/60/91/506527592.jpg',
        lrc: ''
      },
      {
        name: "Cтороною дождь + Колыбельная",
        artist: 'Polina Gagarina',
        url: 'http://sn.sycdn.kuwo.cn/resource/n1/51/60/2488024279.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/60/91/506527592.jpg',
        lrc: ''
      },
      {
        name: "一万次悲伤",
        artist: '逃跑计划',
        url: 'http://other.web.nf01.sycdn.kuwo.cn/resource/n3/80/61/3245409526.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/69/82/4224884544.jpg',
        lrc: ''
      },
      {
        name: "你的爱情",
        artist: '逃跑计划',
        url: 'http://sk.sycdn.kuwo.cn/resource/n2/29/49/2849561093.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/69/82/4224884544.jpg',
        lrc: ''
      },
      {
        name: "是否",
        artist: '齐豫',
        url: 'http://sk.sycdn.kuwo.cn/resource/n2/29/49/2849561093.mp3',
        cover: 'https://tse1-mm.cn.bing.net/th?id=OIP.mdVcz2CKKEdI93-mOoq-HAHaLH&w=70&h=105&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2',
        lrc: ''
      }
    ]
});