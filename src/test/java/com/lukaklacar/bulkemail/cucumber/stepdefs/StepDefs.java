package com.lukaklacar.bulkemail.cucumber.stepdefs;

import com.lukaklacar.bulkemail.BulkEmailServiceApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = BulkEmailServiceApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
