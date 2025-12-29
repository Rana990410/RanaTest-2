package Hard_Soft;

import.org.testng.annotations.Test;

public class first_hard_soft{
	ChromeDriver mydriver;
	@Test
	public void hard_assert_testcase() {    //if assert fail will not continue to click register
		mydriver.findElement(By.name("Username")).sendkeys("Test");
		mydriver.findElement(By.name("Password")).sendkeys("Test");
		mydriver.findEleemnt(By.name("submit")).click();
		Assert.assertsEquals(true, false);
		mydriver.findElementByLinkText("Register").click();
		
	}
	public void soft_assert_testcase() {
		
		mydriver.findElement(By.name("Username")).sendkeys("Test");
		mydriver.findElement(By.name("Password")).sendkeys("Test");
		mydriver.findEleemnt(By.name("submit")).click();
		soft=new SoftAssert();
		soft.assertsEquals(true, false);
		mydriver.findElementByLinkText("Register").click();
		soft.assertAll();
		
	}
}
//BeforeMethod
public void open_browser() {
	System.setProperty("webdriver.chrome.driver", ".\\driver\\chromedriver.exe");
	driver=new ChromeDriver();
}