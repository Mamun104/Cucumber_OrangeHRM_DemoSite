package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login {
    @FindBy(id = "txtUsername")
    WebElement txtUsername;
    @FindBy(id = "txtPassword")
    WebElement txtPassword;
    @FindBy(id = "btnLogin")
    WebElement btnLogin;
    @FindBy(id = "spanMessage")
    WebElement spanMessage;

    public Login(WebDriver driver){
        PageFactory.initElements(driver,this);
    }
    public void doLogin(String username, String password){
        txtUsername.sendKeys(username);
        txtPassword.sendKeys(password);
        btnLogin.click();
    }
    public String getErrorMessage(){
        return spanMessage.getText();
    }
}
