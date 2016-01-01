'use strict';

angularController
    .controller('CheckoutCtrl', ['$scope', 'PaymentService', 'CartService',
        function($scope, paymentService, cartService) {

            cartService.getItems(function(cart){
                $scope.cart = cart.items;
            });


            cartService.getTransportFree(function(fee){
                $scope.transportFee = fee;
            });

            cartService.getVAT().then(
                function(res){

                        $scope.VAT = res;

                },
                function(err){
                    console.log(err);
                }
            );

            $scope.shipping_address = {
                line1: "Quan5",
                city: "HCM",
                state: "VN",
                postal_code: "70000",
                country_code: "US"
            };

            $scope.credit_card = {
                number: "4032038374061251",
                billing_address: $scope.shipping_address
            };

            $scope.paymentinfo = {
                intent: "sale",

                payer: {
                    payment_method: "credit_card",
                    funding_instruments: [{
                        credit_card: $scope.credit_card
                    }]
                },
                cart: $scope.cart,
                transactions: [{
                    amount: {
                        total: cartService.getTotal().toString(),
                        currency: "USD",
                        details: {
                            subtotal: cartService.getSubtotal().toString(),
                            tax: cartService.getTax().toString(),
                            shipping: cartService.getShippaid().toString()
                        }
                    },
                    description: "Đơn hàng thanh toán thông qua paypal của VipMobileShop"
                }]
            };

            $scope.PlaceOrder = function() {
                console.log($scope.paymentinfo);
                paymentService.createPayment($scope.paymentinfo, function(err, res){
                    if (err){
                        console.log(err);
                        return;
                    }
                    $scope.isSuccess = true;
                    console.log(res);

                });
            }

            $scope.bookProduct = function(){
                var bookInfo = {
                    info : $scope.credit_card,
                    cart :  $scope.cart,
//                    total: cartService.getTotal().toString(),
                    VAT: $scope.VAT
                };
                cartService.bookProduct(bookInfo).then(
                   function(res){
                       if(res.data.mess && res.data.mess == 'Success'){
                           notie.alert(1, "Đặt hàng thành công. Quý khách vui lòng đến hộp mail để kiểm tra giao dịch.", 1.5);
                       }
                   },
                   function(err){
                       console.log(err);
                       notie.alert(1, "Có lỗi xảy ra! Vui lòng thử lại", 1.5);
                   });

            }


        }
    ]);
