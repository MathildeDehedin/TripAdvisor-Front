(this.$WP=this.$WP||[]).push(["wc54S1",(e,t)=>{"use strict";var r,a,s,o,l,A,i=()=>({mediaGroup:r("bcom_partner_photos")?"ALL_INCLUDING_RESTRICTED":"ALL_UNRESTRICTED"}),E=()=>({mediaGroup:r("bcom_partner_photos")?"DEFAULT_INCLUDING_RESTRICTED":"DEFAULT"}),_={Hotels:"h",MobileHotels:"h",Hotel_Review:"hr",Hotel_Feature:"hf",MobileHotel_Review:"hr",HotelHighlight:"hh",MobileHotelHighlight:"hh","Hotel_Review-s1":"hh",SmartDeals:"sd",MobileSmartDeals:"sd",HotelsList:"hl",HotelsNear:"hn",LastMinute:"lm",ShowUserReviews:"sur",ShowUserReviewsHotels:"sur",ShowUserReviewsRestaurants:"sur",ShowUserReviewsAttractions:"sur",MobileShowUserReviews:"sur",LocationPhotoDirectLink:"lpdl",AccommodationCrossSells:"acs",MobileNearbyHotels:"nh",Restaurants:"r",Vacation_Packages:"vp",MobileVacation_Packages:"vp",Attractions:"a",Attraction_Review:"ar",Unknown:"un"},L=()=>"maps",n=(e,t)=>(e&&e.startsWith("HotelsList")&&(e="HotelsList"),e&&_[e]?_[e]:(t({module:"media-album-parts",action:"invalidclient",context:e||"falsyValue"}),"un")),u=e=>{switch(e){case"p":case"v":case"pano":return e;default:return"u"}},T={ALL_ALBUMS:101,ALL_PHOTOS_ALBUM:-125,ALL_MEDIA_ALBUM:-127,THIN_GEO_PHOTO_ALBUM:-126,PANO_ALBUM:999,TRAVELER_ALBUM:107,STORYBOARD_ALBUM:14,ROOM_AND_SUITE_ALBUM:106,DINING_ALBUM:16,HOTEL_AND_AMENITIES:104,POOL_AND_BEACH:105,VIDEO:14,FAVORITE_PHOTOS:109,GYM:63238},I={ML:"ML",RECENCY:"RECENCY"},R={all:"ALL_UNRESTRICTED",all2:"ALL_INCLUDING_RESTRICTED",traveler:"TRAVELER",mgmt:"MANAGEMENT",staff:"STAFF",un:"UNKNOWN"},N={ALL_INCLUDING_RESTRICTED:0,ALL_UNRESTRICTED:1,TRAVELER:2,MANAGEMENT:3,STAFF:4,UNKNOWN:-1},M={0:"ALL_INCLUDING_RESTRICTED",1:"ALL_UNRESTRICTED",2:"TRAVELER",3:"MANAGEMENT",4:"STAFF"},c=e=>{switch(e){case R.all:case R.all2:case R.traveler:case R.staff:case R.mgmt:return e;default:return R.un}},d=e=>N[c(e)],O=e=>M[e]||R.un,S=()=>N[c(i().mediaGroup)],D=e=>{switch(e){case T.ROOM_AND_SUITE_ALBUM:return"rssub";case T.HOTEL_AND_AMENITIES:return"hasub";case T.POOL_AND_BEACH:return"pbsub";case T.VIDEO:return"vidsub";case T.FAVORITE_PHOTOS:return"favsub";case T.ALL_MEDIA_ALBUM:default:return"allsub"}},C=e=>{if(e||0===e){var t=O(e);if(t!==R.un)return{mediaGroup:t}}return null},U=(e,t)=>{switch(e){case R.all:case R.all2:return t.string("mv_photos_from_everyone");case R.traveler:return t.string("mv_photos_from_travelers");case R.staff:return t.string("mv_photos_from_professionals");case R.mgmt:return t.string("mv_photos_from_management");case R.un:default:return"UNKNOWN"}},p=e=>Object.assign({},A,{},e),m={albumSelect:"ALBUM",scroll:"SCROLL",galleryItemClicked:"GALLERY_CLICK",fullscreenNav:"FULLSCREEN_NAV",fullscreenClose:"FULLSCREEN_CLOSE",close:"CLOSE",pageLoaded:"PAGED",sourceFilterSelect:"SOURCE_CHANGE",categoryFilterSelect:"CATEGORY_CHANGE",galleryLayoutChanged:"LAYOUT_CHANGE",loadError:"ERROR",sort:"SORT",routeNavigate:"ROUTE_NAVIGATE"},h={setAlbum:"ALBUM",setType:"TYPE",setCategory:"CATEGORY",openGallery:"GALLERY",openDetail:"DETAIL",openViewer:"OPEN",updateLocationInfo:"UPDATE_LOCATION_INFO",updateSelectedMedia:"UPDATE_MEDIA",updateSelectedMediaObject:"UPDATE_MEDIA_OBJECT",resetState:"RESET_STATE"};return[()=>{a=new Map([["BOOKINGCOM","Booking.com"],["LEONARDO","Leonardo"],["ICE","ICE Portal"]]),s=new Map([["LEONARDO","Leonardo"],["ICE","ICE Portal"]]),o=new Set([999,16,22,19,14,109]),l=new Set(["BOOKINGCOM"]),e({ALL_ALBUM:101,ALL_TYPE:0,AlbumTypes:T,BATHROOM_ALBUM_ID:19,DEFAULT_STATE:A={albumId:101,categoryId:101,typeId:0,mediaId:null,sort:null},DINING_ALBUM_ID:16,FAMILY_AND_PLAY_AREAS_ALBUM_ID:22,FAVORITES_ALBUM_ID:109,PANO_ALBUM_ID:999,SERVLET_CLIENT_MAPPING:_,VIDEOS_ALBUM_ID:14,VIDEO_CATEGORY_ALBUM_ID:14,actions:m,buildDefaultState:p,categoryIdsThatAreAlbumIdsSet:o,explicitlyCreditedProviders:s,externalProviders:a,getClientNameForServlet:n,getCurrentAllMediaGroupTypeId:S,getFilter:C,getMapsClientName:L,getMediaFilterToRetrieveAllPhotos:i,getMediaFilterToRetrieveDefaultPhotos:E,getMediaGroupForString:c,getMediaGroupIdForString:d,getMediaGroupStringForId:O,getRHRFiltersWindowConfig:D,getTitleForMediaGroup:U,idToMediaGroup:M,mediaGroupIds:N,mediaGroups:R,mediaSortType:I,mvActions:h,noReportBtnProviders:l,validateMediaType:u})},[e=>r=e.featureIsEnabled]]},["-i3PJS"]]);