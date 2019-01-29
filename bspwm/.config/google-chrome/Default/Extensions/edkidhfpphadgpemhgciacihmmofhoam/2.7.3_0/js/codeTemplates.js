/*
 * Copyright 2015 by Forty Foot Designs, LLC.  All rights reserved.
 *
 *
 */

/*
 function generateInPlayTripCode(id) {
 var out = "<!-- start new inPlay -->" +
 "<div class='inPlayCodeGeneration'><div id=\"inPlayDateSeparator_" + id + "\" class=\"inPlayDateSeparator\"></div>" +
 "<fieldset  data-role=\"controlgroup\"  data-type=\"horizontal\" data-mini=\"true\" id=\"inPlay_" + id + "\">" +
 "<a href=\"#\" id='inPlayButton_" + id + "' class='spread' data-mini=\"true\"  data-role=\"button\"></a>" +
 "</fieldset>" +
 "<div id=\"inPlayOfferDetails_" + id + "\" data-theme=\"a\" data-role=\"content\" class=\"adderData inPlayWindow smallText round\">" +
 "<!--this is never shown --><span id='inPlayOwnerEmpNum_" + id + "' style='display: none'></span>" +
 "<!--this is never shown --><span id='inPlayDepTime_" + id + "' style='display: none'></span>" +
 "<!--this is never shown --><div id=\"inPlayCommandId_" + id + "\" style=\"display: none\"></div>" +
 "<!--this is never shown --><div id=\"inPlayContentsId_" + id + "\" style=\"display: none\"></div>" +
 "<div class='createLinks'>  <a href=\"#\" id='inPlayView_" + id + "' class='create'>Detail</a>" +
 "<a href=\"#\" id='inPlayCreateTradeButton_" + id + "' class='create'>Trade</a>" +
 "</div>" +
 "<div id='inPlayCreateTradeWindow_" + id + "' class='createTradeWindow round'>" +
 "create trade window" +
 "</div>" +
 "<div id='inPlayTradeDetailsId_" + id + "' class='dropTripDetails round'> </div>" +
 "<div id='inPlayDropDetailsId_" + id + "' class='dropTripDetails round'> </div>" +
 "</div></div>";
 return out;
 }
 function buildNoDropCode(id) {
 var out = "<div class='newDropTitle'>Set this trip for Drop</div><!--newRequestVerbiage-->" +
 "Entering a dollar amount below indicates" +
 "that you are willing to pay someone to take this trip from you (you may also leave it blank).  Offers will appear on this page if/when accepted, and an execute button" +
 "will appear on this page at that time." +
 "<a href=\"#\" class='rules smallText'>See Rules</a>" +
 "<div id='showDropDeadOptions_" + id + "' class='dropDeadOptions'>" +
 "<input type='text' style='width: 50px' id='dropRequestAmt_" + id + "' value='' placeholder='$$$'/></div>" +
 "<a href=\"#\" id='createDropRequest_" + id + "' class='create'>Create</a>  <a href=\"#\" id='cancelDrop_" + id + "' class='create'>Cancel</a>";
 return out;
 }
 function buildActiveDropRequest(id, requestId) {
 var out = "<hr class='hr'><!--requestExists-->Active Drop Request<br />You are offering this sequence for drop." +
 "<a href='#' class='create dropRequestLinks' id=\"deleteDropRequest_" + id + "\">Delete</a>" +
 "<span style='display: none;' id='dropRequestDbId_" + id + "'>" + requestId + "</span>";
 return out;
 }
 function existingActiveDropRequestWithMoney(id, requestId, amount) {
 var out = "<hr class='hr'><!--requestExists--><strong>Active Drop Request</strong><br />" +
 "You are offering this sequence for drop and are willing to pay <strong><span id='dropAmt_" + id + "'>$" + amount + ".</span></strong><br />" +
 "<a href='#' class=' create dropRequestLinks' id=\"deleteDropRequest_" + id + "\">Delete</a>" +
 "<a href='#' class='create dropRequestLinks' id=\"changeAmtDropRequest_" + id + "\">Change Amt</a>" +
 "<span style='display: none;' id='dropRequestDbId_" + id + "'>$requestId</span>";
 return out;
 }
 */

/**
 * see liteSabreComm.js line 2659
 * @param {type} placer
 * @returns {String}
 */
function dropAccept(placer) {
    if (placer.motive) {
        var out = "<span class='acceptedAndWaiting'>You agreed to pick up this trip.</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<br />Dropper has agreed to pay $" + placer.motivationAmount + ".<br />" +
                "<div id='acceptedDropContent_" + placer.offerId + "' style='display:none'>" + placer.content + "</div>" +
                "<span id='command_" + placer.offerId + "'>" + placer.user1_command_1 + "</span><a href='#' class='create acceptedDropLinks' id='acceptedDropDetailButton_" + placer.offerId + "'>Detail</a> " +
                "<div id='acceptedDropContent_" + placer.offerId + "' style='display:none'>" + placer.content + "</div>" +
                "<a href='#' class='create acceptCancelLinks' id='cancelAcceptedDropAcceptance_" + placer.offerId + "'>Cancel Offer</a>";
        return out;
    } else {
        var out = "<span class='acceptedAndWaiting'>You agreed to pick up this trip.</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<div id='acceptedDropContent_" + placer.offerId + "' style='display:none'>" + placer.content + "</div>" +
                "<br /><span id='command_" + placer.offerId + "'>" + placer.user1_command_1 + "</span><a href='#' class='create acceptedDropLinks' id='acceptedDropDetailButton_" + placer.offerId + "'>Detail</a> " +
                "<a href='#' class='create acceptCancelLinks' id='cancelAcceptedDropAcceptance_" + placer.offerId + "'>Cancel Offer</a>";
        return out;
    }
}

function myTripPendingOfferEmpIsUser1(placer) {
    var out = "";
    if (placer.motive) {
        out = "<span class='pendingOffer'>You are offering to trade</span><br />Drop dead time: " + placer.earliestDropDeadReadable + " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "'  class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.seq + "</span>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<div style='display: none' id='user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />Waiting for the other pilot to accept your offer to trade for<br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create' id='user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<br />You agree to pay $" + placer.motivationAmount + " if he accepts.<br /><a href='#' class='create' id='deleteSingleTradeTipOffer_" + placer.offerId + "'>Delete $$$</a>" +
                "<a href='#' class='create myTripTradeAction'  data-buttonId='" + placer.id + "' id='deleteSingleTrade_" + placer.offerId + "'>Delete Offer</a><hr class='shortLine'>";
    }
    else {
        out = "<span class='pendingOffer'>You are offering to trade</span><br />Drop dead time: " + placer.earliestDropDeadReadable + " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "'  class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.seq + "</span>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<div style='display: none' id='user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />You are waiting for the other pilot to execute your offer to trade for<br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create' id='user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create myTripTradeAction'  data-buttonId='" + placer.id + "' id='deleteSingleTrade_" + placer.offerId + "'>Delete Offer</a><hr class='shortLine'>";
    }
    return out;
}

function myTripAcceptedAndExecuteNowEmpIsUser1(placer) {
    var out = "";
    if (placer.motive) {
        out = "<span class='acceptedAndExecuteNow'>Your trade offer was accepted!</span><br />Drop dead time: " + placer.earliestDropDeadReadable + " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "'  class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.seq + "</span>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<div style='display: none' id='user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />By clicking 'Execute' you agree to pay $" + placer.motivationAmount + " to trade " +
                "for<br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create' id='user2_content1_detail_button_" + placer.offerId + "'>Detail</a><a href='#' class='create' data-buttonId='" + placer.id + "'  id='executeSingleTrade_" + placer.offerId + "'>Execute</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='deleteSingleTrade_" + placer.offerId + "'>Delete</a><hr class='shortLine'>";
    }
    else {
        out = "<span class='acceptedAndExecuteNow'>Your trade offer was accepted!</span><br />Drop dead time: " + placer.earliestDropDeadReadable + " "
                + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "'  class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.seq + "</span>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<div style='display: none' id='user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                " <br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create' id='user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create' data-buttonId='" + placer.id + "'  id='executeSingleTrade_" + placer.offerId + "'>Execute</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='deleteSingleTrade_" + placer.offerId + "'>Delete</a><hr class='shortLine'>";
    }
    return out;
}
function offeredToYouEmpIsUser2(placer) {
    var paypalLabel = "";
    if (placer.paypalLabel)
    {
        paypalLabel = " <span class='pp noPaypalSenderTrade'>PP</span>";
    }
    var out = "";
    if (placer.motive) {
        out = "<span class='offeredToYou'>You are being offered a trade.</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "' class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<div style='display: none' id='user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<br />" + paypalLabel + "  <span style='color:green; font-weight: bold'>He'll pay you $" + placer.motivationAmount + " if you accept.</span>" +
                "<br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create' id='user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='acceptSingleTrade_" + placer.offerId + "'>Accept</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='declineSingleTrade_" + placer.offerId
                + "'>Decline</a><hr class='shortLine'>";
    }
    else {
        out = "<span class='offeredToYou'>You are being offered a trade.</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "' class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<div style='display: none' id='user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create' id='user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create' data-buttonId='" + placer.id + "'  id='executeSingleTrade_" + placer.offerId + "'>Execute</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='declineSingleTrade_" + placer.offerId + "'>Decline</a><hr class='shortLine'><hr class='shortLine'>";
    }
    return out;
}
function myTripAcceptedAndWaitingEmpIsUser2(placer) {
    var out = "";
    if (placer.motive) {
        out = "<span class='acceptedAndWaiting'>You accepted a trade offer!</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none'  data-buttonId='" + placer.id + "' class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<div style='display: none' id='user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<br />You are waiting for the other pilot to execute this trade,<br />" +
                "<span style='color:green; font-weight: bold'>He'll pay you $" + placer.motivationAmount + ".</span><br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create' id='user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='deleteSingleTrade_" + placer.offerId + "'>Delete</a><hr class='shortLine'>";
    }
    else {
        out = "<span class='acceptedAndExecuteNow'>You accepted a trade offer!</span><br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='user1_emp_" + placer.offerId + "'>" + placer.user1Emp + "</span>" +
                "<span style='display: none' data-buttonId='" + placer.id + "' class='tradeOffer'>" + placer.offerId + "</span>" +
                "<span style='display: none' id='user2_emp_" + placer.offerId + "'>" + placer.user2Emp + "</span>" +
                "<span style='display: none' id='earliestDropDead_" + placer.offerId + "'>" + placer.earliestDropDead + "</span>" +
                "<span style='display: none' id='user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<span style='display: none' id='motivationAmount_" + placer.offerId + "'>" + placer.motivationAmount + "</span>" +
                "<span style='display: none' id='user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<div style='display: none' id='user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create' id='user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<a href='#' class='create' data-buttonId='" + placer.id + "'  id='executeSingleTrade_" + placer.offerId + "'>Execute</a>" +
                "<a href='#' class='create myTripTradeAction' data-buttonId='" + placer.id + "'  id='deleteSingleTrade_" + placer.offerId + "'>Delete</a><hr class='shortLine'>";
    }
    return out;
}
function dropRequestProviderEqualsEmp(placer) {
    var out = "";
    var payPal = "";
    if (placer.paypalLabel) {
        payPal = " <span class='pp noPaypal'>PP</span>";
    }
    if (placer.motive) {
        out = "<br /><span class='acceptedAndExecuteNow'>Offer accepted</span>, with a drop dead time of " + placer.user2DropDead + " ET. " +
                "<span class='acceptedDropOffer_" + placer.index + "' style='display: none;' id='user1_emp_" + placer.index + "_" + placer.offerId + "'>" + placer.empNum + "</span>" +
                "<span class='acceptedDropOffer_" + placer.index + "' style='display: none;' id='user2_emp_" + placer.index + "_" + placer.offerId + "'>" + placer.acceptingUserEmp + "</span>" +
                "<br />By clicking 'Execute' you agree to <strong>pay $" + placer.motivationAmount + "</strong> to drop this trip. " +
                "<a href='#' class='create executeDropBuild' id='executeDrop_" + placer.index + "" + "_" + placer.offerId + "'>Execute</a> " +
                "<select class='ui-select ui-btn ui-btn-inline ui-mini' id='dropType_" + placer.index + "" + "_" + placer.offerId + "'>" +
                "<option value='UNC'>UNC</option>" +
                "<option value='PVD'>PVD</option>" +
                "<option value='CPA'>CPA</option>" +
                "</select>" + payPal +
                "<hr class='shortLine'>";
    }
    else {
        out = "<br /><span class='acceptedAndExecuteNow'>Offer accepted</span>, with a drop dead time of " + placer.user2DropDead + " ET. " +
                "<span class='acceptedDropOffer_" + placer.index + "' style='display: none;' id='user1_emp_" + placer.index + "_" + placer.offerId + "'>" + placer.empNum + "</span>" +
                "<span class='acceptedDropOffer_" + placer.index + "' style='display: none;' id='user2_emp_" + placer.index + "_" + placer.offerId + "'>" + placer.acceptingUserEmp + "</span>" +
                "<br />Tap 'Execute' to immediately drop this trip. " +
                "<a href='#' class='create executeDropBuild' id='executeDrop_" + placer.index + "" + "_" + placer.offerId + "'>Execute</a> " +
                "<select class='ui-select ui-btn ui-btn-inline ui-mini' id='dropType_" + placer.index + "" + "_" + placer.offerId + "'>" +
                "<option value='UNC'>UNC</option>" +
                "<option value='PVD'>PVD</option>" +
                "<option value='CPA'>CPA</option>" +
                "</select>" +
                "<hr class='shortLine'>";
    }
    return out;
}
/**
 * add this title if there are active drop requests
 * @param {type} placer
 * @returns {undefined}
 */
function dropTitle(placer) {
    if (placer.add) {
        return "<hr><span class='acceptedAndExecuteNow'>Existing Drop Offers</span><br />";
    }
    return "";
}
/**
 * this gets added on top of any existing offers
 * @param {type} placer
 * @returns {String}
 */
function dropHead(placer) {
    var out = "";
    if (placer.motive) {
        out = "<hr class='hr'><!--requestExists--><!--amtY--><span class='exclam'>$$$</span> <strong>Active Drop Request</strong><br />" +
                "You are offering this trip for drop and are willing to pay <strong><span id='dropAmt_" + placer.id + "'>$" + placer.motivationAmount + ".</span></strong><br />" +
                "<a href='#' class='create dropRequestLinks' id='deleteDropRequest_" + placer.id + "'>Delete</a>" +
                "<a href='#' class='create dropRequestLinks' id='changeAmtDropRequest_" + placer.id + "'>Change Amt</a>" +
                "<span style='display: none;' id='dropRequestDbId_" + placer.id + "'>" + placer.requestId + "</span>";
    }
    else {
        out = "<hr class='hr'><!--requestExists--><!--amtN--><span class='exclam'>!!!</span> <strong>Active Drop Request</strong><br />You are offering this trip for drop." +
                "<a href='#' class='create dropRequestLinks' id='deleteDropRequest_" + placer.id + "'>Delete</a>" +
                "<span style='display: none;' id='dropRequestDbId_" + placer.id + "'>" + placer.requestId + "</span>";
    }
    return out;
}
function dropTextWhenNoRequestExists(placer) {
    var out = "<div class='newDropTitle'>Set this trip for Drop</div><!--newRequestVerbiage-->" + placer.blockAdd +
            "Entering a dollar amount below indicates " +
            "that you are willing to pay someone to take this trip from you (you may also leave it blank).  Offers will appear on this page if/when accepted, and an execute button" +
            " will appear on this page at that time." +
            "<a href='https://www.aapocket.com/liteSabreMarketDisplay.php#rules' target='_blank' class='rules smallText'>See Rules</a>" +
            "<div id='showDropDeadOptions_" + placer.id + "' class='dropDeadOptions'>" +
            "<input type='text' style='width: 50px' id='dropRequestAmt_" + placer.id + "' value='' placeholder='$$$'/></div>" +
            "<a href='#' id='createDropRequest_" + placer.id + "' class='create'>Create</a>  <a href='#' id='cancelDrop_" + placer.id + "' class='create'>Cancel</a>";
    return out;
}
/**
 * 2 conditions.  when the seq == user2_command_1 or seq == user1_command_1
 * @param {type} placer
 * @returns {undefined}
 */
function existingPendingOfferTradeRequestWithMoney(placer) {
    var out = "";
    if (placer.seqEqualsUser2_command_1) {
        out = "<span class='pendingOffer'>Trade being offered.</span>" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<br />Waiting to be accepted for " + placer.user1_command_1 + ". <a href='#' class='create offerId' id='inPlay_user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<br />$" + placer.motivationAmount + " is being offered.<br /><hr class='shortLine'>";
    }
    else {
        out = "<span class='pendingOffer'>Trade being offered.</span>" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />Waiting to be accepted for " + placer.user2_command_1 + ". <a href='#' class='create offerId' id='inPlay_user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<br />$" + placer.motivationAmount + " is being offered.<br /><hr class='shortLine'>";
    }
    return out;
}
/**
 * inPlay pendingOffer
 * @param {type} placer
 * @returns {String}
 */
function existingPendingOfferTradeRequestWithoutMoney(placer) {
    var out = "";
    if (placer.seqEqualsUser2_command_1) {
        out = "<span class='pendingOffer'>Trade being offered.</span>" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<br />Waiting to be accepted for " + placer.user1_command_1 + ". <a href='#' class='create offerId' id='inPlay_user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";
    }
    else {
         out = "<span class='pendingOffer'>Trade being offered.</span>" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />Waiting to be accepted for " + placer.user2_command_1 + ". <a href='#' class='create offerId' id='inPlay_user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";
    }
    return out;
}
function existingAcceptedAndWaitingTradeRequestWithMoney(placer) {
    var out = "";
    if (placer.seqEqualsUser2_command_1) {
        out = "<span class='acceptedAndWaiting'>This trade offer was accepted</span> but not yet executed." +
                "" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<br />Waiting for execution. $" + placer.motivationAmount + " is being offered.<br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create offerId' id='inPlay_user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";
    } else {
        out = "<span class='acceptedAndWaiting'>This trade offer was accepted</span> but not yet executed." +
                "" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />Waiting for execution. $" + placer.motivationAmount + " is being offered.<br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create offerId' id='inPlay_user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";
    }
    return out;
}
function existingAcceptedAndWaitingTradeRequestWithoutMoney(placer) {
    var out = "";
    if (placer.seqEqualsUser2_command_1) {
        out = "<span class='acceptedAndWaiting'>This trade offer was accepted</span> but not yet executed." +
                "" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user1_command_1_" + placer.offerId + "'>" + placer.user1_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user1_content_1_" + placer.offerId + "'>" + placer.user1Content + "</div>" +
                "<br />Waiting for execution.<br />" + placer.user1_command_1 + "." +
                "<a href='#' class='create offerId' id='inPlay_user1_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";


    } else {
        out = "<span class='acceptedAndWaiting'>This trade offer was accepted</span> but not yet executed." +
                "" + placer.addVerbiage + " " + placer.myTrade + "<br />Drop dead time: " + placer.earliestDropDeadReadable +
                " " + placer.timeZoneIdForMessage + "." +
                "<span style='display: none' id='inPlay_user2_command_1_" + placer.offerId + "'>" + placer.user2_command_1 + "</span>" +
                "<span style='display: none' class='tradeOfferIdClass'>" + placer.offerId + "</span>" +
                "<div style='display: none' id='inPlay_user2_content_1_" + placer.offerId + "'>" + placer.user2Content + "</div>" +
                "<br />Waiting for execution.<br />" + placer.user2_command_1 + "." +
                "<a href='#' class='create offerId' id='inPlay_user2_content1_detail_button_" + placer.offerId + "'>Detail</a>" +
                "<hr class='shortLine'>";
    }
    return out;
}