// Utils
import ServicesUrls from './Utils/ServicesUrls';
import ServicesUtils from './Utils/ServicesUtils';

export default class ExerciseService {
  static getExample() {
    return ServicesUtils.test(ServicesUrls.getExample());
  }
  static getFailedExample() {
    return ServicesUtils.testFail(ServicesUrls.getExample());
  }
}
