<%@page import="com.Payment" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/payments.css">
<script src="Components/jquery-3.2.1.js"></script>
<script src="Components/payments.js"></script>

</head>
<body>
<div class="container">
 <div class="row">
 <div class="col-6">

<h1>Payment Management</h1>
<h4>Add New Payment Details</h4>
<form id="formPayments" name="formPayments" method="post" enctype="multipart/form-data">
	 Date Of Payment:
	<input id="dateOfpay" name="dateOfpay" type="text" class="form-control form-control-sm" placeholder="Enter date of payment">
	<br> Payment Method:
	<input id="payMethod" name="payMethod" type="text" class="form-control form-control-sm" placeholder="Enter payment method">
	<br> CardHolder Name:
	<input id="cardHolder" name="cardHolder" type="text" class="form-control form-control-sm" placeholder="Enter cardholder name">
	<br> Card Number:
	<input id="cardNo" name="cardNo" type="text" class="form-control form-control-sm" placeholder="Enter card number">
	<br> CVV:
	<input id="cvv" name="cvv" type="text" class="form-control form-control-sm" placeholder="CVV">
	<br> Expiration Date:
	<input id="expDate" name="expDate" type="text" class="form-control form-control-sm" placeholder="Expiration date">
	<br> Total Amount:
	<input id="totamount" name="totamount" type="text" class="form-control form-control-sm" placeholder="Total amount">
	<br>
	<br>
	<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
	<input type="hidden" id="hidPaymentIdSave" name="hidPaymentIdSave" value="">
</form>
<br>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>

<br>
<h4>All Payments Details</h4>
<div id="divPaymentsGrid">
	 <%
	 	Payment payment = new Payment();
	 	out.print(payment.readPayment());
	 %>
</div>

</div>
</div>
</div>
</body>
</html>