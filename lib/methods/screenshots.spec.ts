import {getBase64FullPageScreenshotsData} from './screenshots';
import {FullPageScreenshotDataOptions} from './screenshots.interfaces';
import {IMAGE_STRING} from '../mocks/mocks';
import {LogLevel} from "../helpers/options.interface";

describe('screenshots', () => {
  describe('getBase64FullPageScreenshotsData', () => {
    const MOCKED_TAKESCREENSHOT = jest.fn()
      .mockResolvedValue(IMAGE_STRING);

    it('should get the Android nativeWebScreenshot fullpage screenshot data', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 800,
        clientHeight: 800,
        isAndroid: true,
        isAndroidNativeWebScreenshot: true,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // For await executor(getAndroidStatusAddressToolBarHeight, OFFSETS.ANDROID))
        .mockResolvedValueOnce({statusAddressBar: {height: 56}})
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(788)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should get hide elements for the Android nativeWebScreenshot fullpage screenshot', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 600,
        clientHeight: 800,
        isAndroid: true,
        isAndroidNativeWebScreenshot: true,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [<HTMLElement><unknown>'<div/>'],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // For await executor(getAndroidStatusAddressToolBarHeight, OFFSETS.ANDROID))
        .mockResolvedValueOnce({statusAddressBar: {height: 56}})
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(788)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(788)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should get the Android ChromeDriver fullpage screenshot data', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 800,
        clientHeight: 800,
        isAndroid: true,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: true,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should hide elements for the Android ChromeDriver fullpage screenshot', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 800,
        clientHeight: 800,
        isAndroid: true,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: true,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [<HTMLElement><unknown>'<div/>'],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should get the iOS fullpage screenshot data', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 800,
        clientHeight: 800,
        isAndroid: false,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: true,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [],
      };
      const MOCKED_EXECUTOR = jest.fn()
        .mockResolvedValueOnce({statusAddressBar: {height: 94}})
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should hide elements for the iOS fullpage screenshot', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 800,
        clientHeight: 800,
        isAndroid: false,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: true,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [<HTMLElement><unknown>'<div/>'],
      };
      const MOCKED_EXECUTOR = jest.fn()
        .mockResolvedValueOnce({statusAddressBar: {height: 94}})
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(1200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideScrollBars, false);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should get the desktop browser fullpage screenshot data', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 768,
        clientHeight: 800,
        isAndroid: false,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 3
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 4
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 5
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200);

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });

    it('should hide elements for the desktop browser fullpage screenshot', async () => {
      const options: FullPageScreenshotDataOptions = {
        addressBarShadowPadding: 6,
        devicePixelRatio: 2,
        fullPageScrollTimeout: 1,
        innerHeight: 768,
        clientHeight: 800,
        isAndroid: false,
        isAndroidNativeWebScreenshot: false,
        isAndroidChromeDriverScreenshot: false,
        isHybridApp: false,
        isIos: false,
        logLevel: LogLevel.debug,
        toolBarShadowPadding: 6,
        hideAfterFirstScroll: [<HTMLElement><unknown>'<div/>'],
      };
      const MOCKED_EXECUTOR = jest.fn()
        // THIS NEEDS TO BE FIXED IN THE FUTURE
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 2
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, true);
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 3
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 4
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // RUN 5
        // getFullPageScreenshotsDataNativeMobile: For await executor(scrollToPosition, scrollY)
        .mockResolvedValueOnce({})
        // getFullPageScreenshotsDataNativeMobile: For await executor(getDocumentScrollHeight)
        .mockResolvedValueOnce(3200)
        // getFullPageScreenshotsDataNativeMobile: For await executor(hideRemoveElements, {hide: hideAfterFirstScroll, remove: []}, false);
        .mockResolvedValueOnce({});

      // Replace the screenshot with a `mocked-screenshot-string`;
      const result = await getBase64FullPageScreenshotsData(MOCKED_TAKESCREENSHOT, MOCKED_EXECUTOR, options);
      result.data.forEach(dataObject => dataObject.screenshot = 'mocked-screenshot-string');

      expect(result).toMatchSnapshot();
    });
  });
});
