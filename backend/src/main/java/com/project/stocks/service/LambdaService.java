package com.project.stocks.service;

import org.springframework.stereotype.Service;
import com.amazonaws.services.lambda.invoke.LambdaFunction;

@Service
public class LambdaService {
    @LambdaFunction(functionName="generateStockInfo")
    public void generateStockInformation(String stockId) {

    }
}
