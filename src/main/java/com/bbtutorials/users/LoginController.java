package com.bbtutorials.users;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

    @Slf4j
    @RestController
    @RequestMapping("/api/")
    public class LoginController {



        @PostMapping(path = "/login")
        public ResponseEntity<?> listUsers() {
            log.info("UsersController:  list users");
//        List<Users> resource = usersService.getUsers();
//        return ResponseEntity.ok(resource);
            return null;
        }


    }


