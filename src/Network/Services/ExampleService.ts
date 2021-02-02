// Utils
import ServicesUtils from '../Utils/ServicesUtils';
import ServicesUrls from '../Utils/ServicesUrls';

export default class ExerciseService {
  static getExample() {
    return ServicesUtils.test(ServicesUrls.getExample());
  }
  static getFailedExample() {
    return ServicesUtils.testFail(ServicesUrls.getExample());
  }
}
