package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stock {

    @JsonProperty("stockId")
    private String id;

    @JsonProperty("MarketCap")
    private StockMetrics marketCap;

    @JsonProperty("PE")
    private StockMetrics pE;

    @JsonProperty("FaceValue")
    private StockMetrics faceValue;

    @JsonProperty("Dividend")
    private StockMetrics dividend;

    @JsonProperty("OPM")
    private YearlyDetail opmDetails;

    @JsonProperty("NPM")
    private YearlyDetail npmDetails;

    @JsonProperty("Debt")
    private Debt debt;

    public Stock(String id, StockMetrics marketCap, StockMetrics pE, StockMetrics faceValue,
                 StockMetrics dividend, YearlyDetail opmDetails, YearlyDetail npmDetails, Debt debt) {
        this.id = id;
        this.marketCap = marketCap;
        this.pE = pE;
        this.faceValue = faceValue;
        this.dividend = dividend;
        this.opmDetails = opmDetails;
        this.npmDetails = npmDetails;
        this.debt = debt;
    }

    public Stock() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public StockMetrics getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(StockMetrics marketCap) {
        this.marketCap = marketCap;
    }

    public StockMetrics getPE() {
        return pE;
    }

    public void setPE(StockMetrics pE) {
        this.pE = pE;
    }

    public StockMetrics getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(StockMetrics faceValue) {
        this.faceValue = faceValue;
    }

    public StockMetrics getDividend() {
        return dividend;
    }

    public void setDividend(StockMetrics dividend) {
        this.dividend = dividend;
    }

    public YearlyDetail getOpmDetails() {
        return opmDetails;
    }

    public void setOpmDetails(YearlyDetail opmDetails) {
        this.opmDetails = opmDetails;
    }

    public YearlyDetail getNpmDetails() {
        return npmDetails;
    }

    public void setNpmDetails(YearlyDetail npmDetails) {
        this.npmDetails = npmDetails;
    }

    public Debt getDebt() {
        return debt;
    }

    public void setDebt(Debt debt) {
        this.debt = debt;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "id='" + id + '\'' +
                ", marketCap='" + marketCap + '\'' +
                ", pE='" + pE + '\'' +
                ", faceValue='" + faceValue + '\'' +
                ", dividend='" + dividend + '\'' +
                ", opmDetails=" + opmDetails +
                ", npmDetails=" + npmDetails +
                ", debt=" + debt +
                '}';
    }


}
