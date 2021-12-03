package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class Stock {

    @JsonProperty("stockId")
    private String id;

    @JsonProperty("MarketCap")
    private PropertyDetail marketCap;

    @JsonProperty("PE")
    private PropertyDetail pE;

    @JsonProperty("FaceValue")
    private PropertyDetail faceValue;

    @JsonProperty("Dividend")
    private PropertyDetail dividend;

    @JsonProperty("OPM")
    private YearlyDetail opmDetails;

    @JsonProperty("NPM")
    private YearlyDetail npmDetails;

    @JsonProperty("Debt")
    private Debt debt;

    public Stock(String id, PropertyDetail marketCap, PropertyDetail pE, PropertyDetail faceValue,
                 PropertyDetail dividend, YearlyDetail opmDetails, YearlyDetail npmDetails, Debt debt) {
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

    public PropertyDetail getMarketCap() {
        return marketCap;
    }

    public void setMarketCap(PropertyDetail marketCap) {
        this.marketCap = marketCap;
    }

    public PropertyDetail getPE() {
        return pE;
    }

    public void setPE(PropertyDetail pE) {
        this.pE = pE;
    }

    public PropertyDetail getFaceValue() {
        return faceValue;
    }

    public void setFaceValue(PropertyDetail faceValue) {
        this.faceValue = faceValue;
    }

    public PropertyDetail getDividend() {
        return dividend;
    }

    public void setDividend(PropertyDetail dividend) {
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
