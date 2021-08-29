package com.project.stocks.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;
import java.util.List;

public class Debt {

    @JsonProperty("Revenue")
    private List<YearInfo> revenueDetails = new ArrayList<>();

    @JsonProperty("Borrowings")
    private List<YearInfo> borrowingsDetails = new ArrayList<>();

    @JsonProperty("OtherLiabilities")
    private List<YearInfo> otherLiabilitiesDetails = new ArrayList<>();

    public List<YearInfo> getRevenueDetails() {
        return revenueDetails;
    }

    public void setRevenueDetails(List<YearInfo> revenueDetails) {
        this.revenueDetails = revenueDetails;
    }

    public List<YearInfo> getBorrowingsDetails() {
        return borrowingsDetails;
    }

    public void setBorrowingsDetails(List<YearInfo> borrowingsDetails) {
        this.borrowingsDetails = borrowingsDetails;
    }

    public List<YearInfo> getOtherLiabilitiesDetails() {
        return otherLiabilitiesDetails;
    }

    public void setOtherLiabilitiesDetails(List<YearInfo> otherLiabilitiesDetails) {
        this.otherLiabilitiesDetails = otherLiabilitiesDetails;
    }

    @Override
    public String toString() {
        return "Debt{" +
                "revenueDetails=" + revenueDetails +
                ", borrowingsDetails=" + borrowingsDetails +
                ", otherLiabilitiesDetails=" + otherLiabilitiesDetails +
                '}';
    }
}
