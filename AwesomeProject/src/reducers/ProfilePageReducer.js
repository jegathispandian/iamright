import * as types from '../actions/types';

const initialState = {
   make: '',
   model: '',
   fueltype: '',
   variant: '',
   year: '',
   vehiclenumber: 'TN-11-2342',
   expired: '',
   notexpired: '',
   Expired_Less_Then_90: '',
   Expired_More_Then_90: '',
   claimed: '',
   NotClaimed: '',
   ncbbonus: '',
   zerodepreciation: false,
   invoice: false,
   roadsideassistance: false,
   engineprotector: false,
   ncbprotection: false,
   driver: false,
   passenger: false,
   accessories: false,
   scdescription: '',
   ac_expired_and_claimed_page: false,
   ac_not_expired: true,
   ac_expired_more_90: false,
   ac_expired_less_90: false,
   ac_claim: true,
   ac_no_claim: false,
   ac_ncb_page: false,
   rtocode: '',
   compareQuotes: [],
   bottomBarDisplay: false,
   electrical_addon: '',
   non_electrical_addon: '',
   passenger_addon: '',
   productids: [],
   clearcompare: false,
   proposalId: '',
   bikeSelected: false,
   carNumberKnown: true
};

export const carDetailsInputs = (state = initialState, action) => {
  switch (action.type) {
        case 'AC_NOT_EXPIRED_CLICKED' :
          return { ...state, ac_not_expired: true, ac_expired_more_90: false, ac_expired_less_90: false };
        case 'AC_EXPIRED_CLICKED_LESS_90' :
          return { ...state, ac_expired_more_90: true, ac_expired_less_90: false, ac_not_expired: false };
        case 'AC_EXPIRED_CLICKED_MORE_90' :
          return { ...state, ac_expired_less_90: true, ac_expired_more_90: false, ac_not_expired: false };
        case 'AC_NO_CLAIM' :
          return { ...state, ac_no_claim: true, ac_claim: false };
        case 'AC_CLAIM' :
          return { ...state, ac_claim: true, ac_no_claim: false };
        case 'AC_NCB_PAGE' :
          return { ...state, ac_ncb_page: true };
        case 'QUOTES_COMPARER' :
          return { ...state, compareQuotes: action.payload };
        case 'ELECTRICAL_ADDON' :
          return { ...state, electrical_addon: action.payload };
        case 'NON_ELECTRICAL_ADDON' :
          return { ...state, non_electrical_addon: action.payload };
        case 'PASSENGER_ADDON' :
          return { ...state, passenger_addon: action.payload };
        case 'BIKESELECTED' :
          return { ...state, bikeSelected: true };
        case 'NONBIKESLECTED' :
          return { ...state, bikeSelected: false };
        case 'PRODUCT_IDS' :
          return { ...state, productids: action.payload };
        case 'DONT_CLEAR_ALL_COMPARE' :
          return { ...state, clearcompare: false };
        case 'CLEAR_COMPARE' :
          return { ...state, clearcompare: true };
        case 'AC_PROPOSAL_ID' :
          return { ...state, proposalId: action.payload };
        case types.AC_EXPIRED :
          return { ...state, expired: action.payload };
          case types.AC_EXPIRED_AND_CLAIMED_PAGE :
          return { ...state, ac_expired_and_claimed_page: true };
          case types.AC_RTONAME :
             return { ...state, rtoname: action.payload };
          case types.AC_RTOCODE :
             return { ...state, rtocode: action.payload };
          case types.AC_NCB_BONUS :
               return { ...state, ncbbonus: action.payload };
          case types.AC_NCB_LIST :
               return { ...state, ncblist: action.payload };
          case types.AC_INPUT_PARAMS :
               return { ...state, [action.payloadName]: action.payloadKey };
          case types.AC_DONT_KNOW_CAR_NUMBER :
               return { ...state, dontknowcarnumber: action.responseData.responseData };
          case types.AC_EXPIREDLESSTHEN90DAYS :
               return { ...state, expiredlessthen90days: action.responseData };
          case types.AC_EXPIREDMORETHEN90DAYS :
                return { ...state, expiredmorethen90days: action.responseData };
          case types.AC_NOT_EXPIRED :
                 return { ...state, notexpired: action.responseData };
          case types.AC_CLAIMED :
                return { ...state, claimed: action.payload };
          case types.AC_NOT_CLAIMED :
                return { ...state, NotClaimed: action.payload };
          case types.AC_ELEMENT :
                return { ...state, carelementtype: action.element };
          case types.AC_SET_ADDON_COVERS :
                return { ...state, [action.payloadName]: action.payloadKey };
          case types.AC_SCANNER :
                return { ...state, scdescription: action.payload };
          case 'AC_MOTOR_NUMBER_KNOWN' :
                return { ...state, carNumberKnown: action.boolEle };

    default:
      return state;
  }
};

const CheckoutinitialState = {
   firstname: '',
   lastname: '',
   Email: '',
   mobilenumber: '',
   gender: '',
   dateofbirth: '',
   nomineename: '',
   nomineeage: '',
   nomineerelationship: '',
   place: '',
   address: '', //rename
   state: '', //rename
   district: '',
   stateId: '',
   country: '',
   countrycode: '',
   pincodelist: [],
 pincode: '',
 vendordetails: '',
 vendor: '',
 policynumber: '',
 LoanProvider: '',
 changeloan: '',
 enginenumber: '',
 ChasisNumber: '',
 userid: '',
 userData: [],
 result: '',
 NomineeRelationshipList: [],
 NomineeRelationship: '',
 caronLoan: '',
 purchaseStatus: '',
 scanloaded: false,

};

export const carcheckoutDetailsInputs = (state = CheckoutinitialState, action) => {
  switch (action.type) {
    case types.AC_CHECKOUT_DETAILS :
      return { ...state, [action.payloadName]: action.payloadKey };
    case types.AC_PINCODELIST :
      return { ...state, pincodelist: action.payload };
    case types.AC_VENDORLIST :
      return { ...state, vendordetails: action.payload };
    case types.AC_CARLOAN :
      return { ...state, carloan: action };
    case types.AC_CAR_NOT_LOAN :
      return { ...state, carnotloan: action };
    case types.AC_LOAN_PROVIDER :
      return { ...state, LoanProvider: action.payload };
    case types.AC_NOMINEE_RELATIONSHIP :
      return { ...state, NomineeRelationshipList: action.payload };
    case types.AC_CHANGE_LOAN_PROVIDER :
      return { ...state, changeloan: action.payload };
    default:
      return state;
  }
};
const MAKELIST = {
  makeslist: [],
};
const MODELLIST = {
  modellist: [],
};
const FUELTYPELIST = {
  fueltypelist: [],
};
const VARIANTLIST = {
  variantlist: [],
};
const YEARLIST = {
  yearlist: [],
};
const RTOLIST = {
  rtolist: [],
};
export const setRTODetails = (state = RTOLIST, action) => {
  switch (action.type) {
    case types.AC_RTOLIST :
      return { ...state, rtolist: action.payload };
    case types.AC_RESETLIST :
      return { ...state, rtolist: [] };
    default:
      return state;
  }
};
export const carMakeDetails = (state = MAKELIST, action) => {
  switch (action.type) {
    case types.AC_MAKELIST :
      return { ...state, makeslist: action.payload };
    // case types.AC_RESETLIST :
    //   return { ...state, makeslist: [] };
    default:
      return state;
  }
};

export const carModelDetails = (state = MODELLIST, action) => {
  switch (action.type) {
    case types.AC_MODELLIST :
        return { ...state, modellist: action.payload };
    // case types.AC_RESETLIST :
    //     return { ...state, modellist: [] };
    default:
      return state;
  }
};

export const CarFueltypeDetails = (state = FUELTYPELIST, action) => {
  switch (action.type) {
    case types.AC_FUELTYPELIST :
         return { ...state, fueltypelist: action.payload };
    // case types.AC_RESETLIST :
    //      return { ...state, fueltypelist: [] };
    default:
       return state;
  }
};

export const carVariantDetails = (state = VARIANTLIST, action) => {
  switch (action.type) {
    case types.AC_VARIANTLIST :
       return { ...state, variantlist: action.payload };
    // case types.AC_RESETLIST :
    //    return { ...state, variantlist: [] };
    default:
       return state;
  }
};

export const carYearDetails = (state = YEARLIST, action) => {
  switch (action.type) {
    case types.AC_YEARLIST :
         return { ...state, yearlist: action.payload };
    // case types.AC_RESETLIST :
    //      return { ...state, yearlist: [] };
    default:
        return state;
  }
};

export const carInsuranceEnquiryDetails = (state = {}, action) => {
  switch (action.type) {
    case types.AC_SET_ENQUIRY_DETAILS :
         return { ...state, items: action.payload };
    case types.AC_ENQUIRYID :
         return { ...state, enquiryId: action.payload };
    default:
        return state;
  }
};


export const carInsuranceQuotes = (state = { messages: [] }, action) => {
  switch (action.type) {
    case types.AC_SET_VIEW_QUOTES : {
      const messages = state.messages.map(message => Object.assign({}, message));
      messages.push(Object.assign({}, action.output));
     return Object.assign({}, state, { messages });
    }
    case types.AC_RESET_VIEW_QUOTES : {
      let initialstate = state;
      initialstate = { messages: [] };
     return Object.assign({}, initialstate);
     }
     default:
         return state;
}
};

export const carInsuranceBuyPlan = (state = {}, action) => {
  switch (action.type) {
    case types.AC_SET_BUY_PLAN :
      return Object.assign({}, state, { action });
    default:
        return state;
  }
};

export const carFinalPageReducer = (state = {}, action) => {
  switch (action.type) {
    case types.AC_FINALPAGE :
        return { ...state, action };
    default:
        return state;
  }
};
