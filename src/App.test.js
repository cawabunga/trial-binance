import puppeteer from "puppeteer";

const open = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 500,
      height: 2400,
    },
    userAgent: "",
  });

  await page.goto("http://localhost:3000/");

  return [browser, page];
};

describe("Dummy test", () => {
  let browser, page;
  beforeAll(async () => {
    [browser, page] = await open();
  });

  afterAll(() => {
    browser.close();
  });

  test("includes disconnect button", async () => {
    const el = await page.waitForSelector("[data-test=disconnect]");
    expect(el).toBeDefined();
  });
});
