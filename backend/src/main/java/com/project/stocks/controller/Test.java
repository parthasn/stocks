package com.project.stocks.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class Test {

    @GetMapping(value = "/HelloWorld")
    private String HelloWorld(){
        return "Hello World!!!";
    }
}