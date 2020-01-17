import {LandMark} from '../land-mark.model';
import * as LandMarkActions from './land-mark.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  landMarks: State;
}

export interface State {
  landMarks: LandMark[];
}

const initialState: State = {
  landMarks: [
    new LandMark(
      'CN Tower',
      'Toronto\'s famous landmark, the 553 meter CN Tower',
      'https://totimes.ca/wp-content/uploads/2019/03/cn-tower-toronto-ontario-th-min-859x639.jpg',
      'Toronto\'s famous landmark, the 553-meter CN Tower, is one of the city\'s must see attractions and also the most impossible to miss. Towering above the downtown, this Canadian icon can be seen from almost everywhere in the city. You have the option of simply appreciating the building from the ground, or taking a trip up to one of the observation areas or restaurants for fabulous views over the city and Lake Ontario. The CN Tower, built between 1972 and 1976, was once the tallest freestanding structure in the world, but has long since been surpassed.\n' +
      '\n' +
      'The highest viewing area on the CN Tower is from the Sky Pod at 447 meters above the city, with views that, on clear days, extend to Niagara Falls and New York State. To get here requires taking two elevators. Below this, at the top of the main elevator is the LookOut level at 346 meters, with floor-to-ceiling windows and the new Glass Floor, which looks down to the original Glass Floor, one floor below, where the Outdoor Sky Terrace is located. As the name suggests, the Glass Floor offers a bird\'s-eye view directly down over the city.\n' +
      '\n' +
      'For those looking for a little more adventure, or perhaps a lot more adventure, there is the "Edge Walk." This involves a hands-free walk on a 1.5-meter-wide ledge around the outside edge of the main pod, at an elevation of 365 meters. Participants are attached to a safety harness and rope.\n' +
      '\n' +
      'Located at 351 meters is the revolving 360 Restaurant, featuring fine dining and some of the best views from a table anywhere in Toronto. 360 is open for lunch and dinner, and visitors who dine here also receive complimentary access to the LookOut and Glass Floor levels of the tower.\n' +
      '\n' +
      'Basing yourself in the city center, preferably near the CN Tower, is the best option for exploring Toronto. For accommodation ideas in this area see our recommended luxury, mid-range, and budget hotels in Toronto.\n' +
      '\n' +
      'Address: 301 Front Street West, Toronto, Ontario\n' +
      '\n' +
      'Official Site: https://www.cntower.ca/intro.html'
    ),
    new LandMark('Niagara Falls',
      'A spectacular waterfall in the NIAGARA RIVER, is the world\'s greatest waterfall',
      'https://www.planetware.com/wpimages/2019/03/canada-toronto-niagara-falls-day-trip-hornblower.jpg',
      'If you have never been, a quick day trip from Toronto to Niagara Falls is well worth the time. You can be standing on the edge of the falls in just over an hour.\n' +
      '\n' +
      'A tour to Niagara Falls from Toronto is an easy way to see the falls if you don\'t want to drive yourself. Tours offer hotel pickup and drop-off and include a Hornblower Niagara Cruise, which takes you up close to the wall of water tumbling that is the main Horseshoe Falls. Tours also stop at some of the key sites in the area, including Whirlpool Rapids, the Floral Clock, and the beautiful little town of Niagara-on-the-Lake.\n' +
      '\n' +
      'If you have enough time, you may also want to consider spending a night at Niagara Falls to explore the downtown and see the falls lit up at night.\n' +
      '\n' +
      'Accommodation: Where to Stay in Niagara Falls: Best Areas & Hotels'
    )
  ]
};

export function landMarkReducer(state = initialState, action: LandMarkActions.LandMarkActions) {
  switch (action.type) {
    case (LandMarkActions.SET_LANDMARKS):
      return {
        ...state,
        landMarks: [...action.payload]
      };
    case (LandMarkActions.ADD_LANDMARKS):
      return {
        ...state,
        landMarks: [...state.landMarks, action.payload]
      };
    case (LandMarkActions.UPDATE_LANDMARK):
      const landMark = state.landMarks[action.payload.index];
      const updatedLandMark = {
        ...landMark,
        ...action.payload.updateLandMark
      };
      const landMarks = [...state.landMarks];
      landMarks[action.payload.index] = updatedLandMark;
      return {
        ...state,
        landMarks: landMarks
      };
    case (LandMarkActions.DELETE_LANDMARK):
      const oldLandMark = [...state.landMarks];
      oldLandMark.splice(action.payload, 1);
      return {
        ...state,
        landMarks: oldLandMark
      };
    default:
      return state;
  }
}
