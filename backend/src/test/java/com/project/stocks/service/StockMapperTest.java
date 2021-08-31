package com.project.stocks.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.project.stocks.dto.Stock;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StockMapperTest {

    @Test
    void testMapMethodInCaseOfNullInputShouldReturnNull() throws JsonProcessingException {
        assertNull(StockMapper.map(null));
    }

    @Test
    void testMapMethodInCaseOfEmptyInputShouldReturnNull() throws JsonProcessingException {
        assertNull(StockMapper.map(""));
    }

    @Test
    void testMapMethodInCaseValidDataShouldReturnStockObjectWithIdTCSandPEValue39() throws JsonProcessingException {
        String input = "{\"stockId\":\"TCS\",\"MarketCap\":\"1,376,103\",\"PE\":\"39.0\",\"Dividend\":\"1.02%\",\"FaceValue\":\"1.00\",\"OPM\":[{\"year\":\"Mar 2010\",\"value\":\"28%\"},{\"year\":\"Mar 2011\",\"value\":\"30%\"},{\"year\":\"Mar 2012\",\"value\":\"30%\"},{\"year\":\"Mar 2013\",\"value\":\"29%\"},{\"year\":\"Mar 2014\",\"value\":\"31%\"},{\"year\":\"Mar 2015\",\"value\":\"26%\"},{\"year\":\"Mar 2016\",\"value\":\"28%\"},{\"year\":\"Mar 2017\",\"value\":\"27%\"},{\"year\":\"Mar 2018\",\"value\":\"26%\"},{\"year\":\"Mar 2019\",\"value\":\"27%\"},{\"year\":\"Mar 2020\",\"value\":\"27%\"},{\"year\":\"Mar 2021\",\"value\":\"28%\"},{\"year\":\"TTM\",\"value\":\"29%\"}],\"NPM\":[{\"year\":\"Mar 2010\",\"value\":\"7,001\"},{\"year\":\"Mar 2011\",\"value\":\"9,068\"},{\"year\":\"Mar 2012\",\"value\":\"10,413\"},{\"year\":\"Mar 2013\",\"value\":\"13,917\"},{\"year\":\"Mar 2014\",\"value\":\"19,164\"},{\"year\":\"Mar 2015\",\"value\":\"19,852\"},{\"year\":\"Mar 2016\",\"value\":\"24,270\"},{\"year\":\"Mar 2017\",\"value\":\"26,289\"},{\"year\":\"Mar 2018\",\"value\":\"25,826\"},{\"year\":\"Mar 2019\",\"value\":\"31,472\"},{\"year\":\"Mar 2020\",\"value\":\"32,340\"},{\"year\":\"Mar 2021\",\"value\":\"32,430\"},{\"year\":\"TTM\",\"value\":\"34,430\"}],\"Debt\":{\"Revenue\":[{\"year\":\"Mar 2010\",\"value\":\"18,171\"},{\"year\":\"Mar 2011\",\"value\":\"24,209\"},{\"year\":\"Mar 2012\",\"value\":\"29,284\"},{\"year\":\"Mar 2013\",\"value\":\"38,350\"},{\"year\":\"Mar 2014\",\"value\":\"48,999\"},{\"year\":\"Mar 2015\",\"value\":\"50,439\"},{\"year\":\"Mar 2016\",\"value\":\"70,875\"},{\"year\":\"Mar 2017\",\"value\":\"86,017\"},{\"year\":\"Mar 2018\",\"value\":\"84,937\"},{\"year\":\"Mar 2019\",\"value\":\"89,071\"},{\"year\":\"Mar 2020\",\"value\":\"83,751\"},{\"year\":\"Mar 2021\",\"value\":\"86,063\"}],\"Borrowings\":[{\"year\":\"Mar 2010\",\"value\":\"103\"},{\"year\":\"Mar 2011\",\"value\":\"75\"},{\"year\":\"Mar 2012\",\"value\":\"127\"},{\"year\":\"Mar 2013\",\"value\":\"232\"},{\"year\":\"Mar 2014\",\"value\":\"297\"},{\"year\":\"Mar 2015\",\"value\":\"358\"},{\"year\":\"Mar 2016\",\"value\":\"245\"},{\"year\":\"Mar 2017\",\"value\":\"289\"},{\"year\":\"Mar 2018\",\"value\":\"247\"},{\"year\":\"Mar 2019\",\"value\":\"62\"},{\"year\":\"Mar 2020\",\"value\":\"8,174\"},{\"year\":\"Mar 2021\",\"value\":\"7,795\"}],\"OtherLiabilities\":[{\"year\":\"Mar 2010\",\"value\":\"8,856\"},{\"year\":\"Mar 2011\",\"value\":\"8,092\"},{\"year\":\"Mar 2012\",\"value\":\"11,551\"},{\"year\":\"Mar 2013\",\"value\":\"13,154\"},{\"year\":\"Mar 2014\",\"value\":\"17,337\"},{\"year\":\"Mar 2015\",\"value\":\"22,325\"},{\"year\":\"Mar 2016\",\"value\":\"16,974\"},{\"year\":\"Mar 2017\",\"value\":\"15,830\"},{\"year\":\"Mar 2018\",\"value\":\"19,751\"},{\"year\":\"Mar 2019\",\"value\":\"24,393\"},{\"year\":\"Mar 2020\",\"value\":\"27,820\"},{\"year\":\"Mar 2021\",\"value\":\"35,764\"}]}}";
        Stock stock = StockMapper.map(input);
        assertEquals("TCS", stock.getId());
        assertEquals("39.0", stock.getPE());
    }
}