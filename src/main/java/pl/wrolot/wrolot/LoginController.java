package pl.wrolot.wrolot;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {
    @PostMapping("/login")
    public String login(@RequestParam("username") String username, @RequestParam("password") String password) {
        if (username.equals("admin") && password.equals("1234")) {
            return "Siema admin!";
        }
        else {
            return "Blad";
        }
    }
}
