package com.project.stocks.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.project.stocks.dto.Stock;

public class StockMapper {

    public static Stock map(String result) throws JsonProcessingException {
        if(result == null || result.isEmpty()) return null;
        ObjectMapper mapper = new ObjectMapper();
        Stock stock = mapper.readValue(result, Stock.class);
        return stock;
    }

}